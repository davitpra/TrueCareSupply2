import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

// Verificar la firma del webhook de Resend
async function verifyWebhookSignature(
  request: NextRequest,
): Promise<boolean> {
  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.warn("RESEND_WEBHOOK_SECRET no está configurado");
    return true; // En desarrollo, permitir sin verificación
  }

  try {
    const headersList = await headers();
    const signature = headersList.get("svix-signature");
    const timestamp = headersList.get("svix-timestamp");
    const id = headersList.get("svix-id");

    if (!signature || !timestamp || !id) {
      console.error("Headers de webhook faltantes");
      return false;
    }

    // Aquí podrías implementar la verificación completa de la firma
    // Por ahora, simplemente verificamos que los headers existan
    return true;
  } catch (error) {
    console.error("Error verificando firma del webhook:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticidad del webhook
    const isValid = await verifyWebhookSignature(request);
    if (!isValid) {
      return NextResponse.json(
        { success: false, error: "Webhook no autorizado" },
        { status: 401 },
      );
    }

    // Parsear el payload del webhook
    const payload = await request.json();
    console.log("Webhook recibido:", JSON.stringify(payload, null, 2));

    // Verificar que es un evento de email recibido
    if (payload.type !== "email.received") {
      console.log("Tipo de evento ignorado:", payload.type);
      return NextResponse.json(
        { success: true, message: "Evento ignorado" },
        { status: 200 },
      );
    }

    // Extraer información del email recibido
    const emailData = payload.data;
    const emailId = emailData.email_id;

    // Log detallado de los campos recibidos
    console.log("Campos disponibles en emailData:", Object.keys(emailData));
    console.log("Tiene html?", !!emailData.html);
    console.log("Tiene text?", !!emailData.text);
    console.log("Tiene body?", !!emailData.body);

    if (!emailId) {
      console.error("Email ID no encontrado en el payload");
      return NextResponse.json(
        { success: false, error: "Email ID faltante" },
        { status: 400 },
      );
    }

    // Obtener el contenido completo del email desde la API de Resend
    // IMPORTANTE: Para emails RECIBIDOS, usar el endpoint /emails/received/{id}
    let email;

    try {
      console.log(`Obteniendo contenido del email ${emailId} desde API de Resend...`);

      // Endpoint correcto para emails recibidos
      const response = await fetch(`https://api.resend.com/emails/received/${emailId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error API Resend (${response.status}):`, errorText);

        // Si la API falla, usar los datos del webhook directamente
        console.warn("⚠️ No se pudo obtener el contenido completo. Usando datos del webhook.");
        email = emailData;
      } else {
        const emailContent = await response.json();
        email = emailContent;
        console.log("✅ Email obtenido exitosamente desde API");
        console.log("Tiene html:", !!email.html);
        console.log("Tiene text:", !!email.text);
      }
    } catch (error) {
      console.error("❌ Error obteniendo contenido del email:", error);
      // Usar los datos del webhook como respaldo
      console.warn("⚠️ Usando datos del webhook como respaldo");
      email = emailData;
    }

    console.log("Email recibido de:", email.from);
    console.log("Asunto:", email.subject);

    // Reenviar el email a la dirección configurada
    const forwardTo = process.env.EMAIL_FORWARD_TO || process.env.EMAIL_TO;

    if (!forwardTo) {
      console.error("EMAIL_FORWARD_TO no está configurado");
      return NextResponse.json(
        { success: false, error: "Destino de reenvío no configurado" },
        { status: 500 },
      );
    }

    // Preparar el contenido del email
    const emailBody = email.html || email.text || "(Sin contenido)";
    const emailTo = Array.isArray(email.to) ? email.to.join(", ") : email.to || "No especificado";

    // Construir el email de reenvío
    const forwardedEmail = {
      from: process.env.EMAIL_FROM || "noreply@truecaresupply.ca",
      to: forwardTo,
      subject: `[Reenviado] ${email.subject || "(Sin asunto)"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <p style="margin: 4px 0;"><strong>De:</strong> ${email.from}</p>
            <p style="margin: 4px 0;"><strong>Para:</strong> ${emailTo}</p>
            <p style="margin: 4px 0;"><strong>Asunto:</strong> ${email.subject || "(Sin asunto)"}</p>
            <p style="margin: 4px 0;"><strong>Fecha:</strong> ${new Date(email.created_at).toLocaleString("es-ES")}</p>
            ${email.email_id ? `<p style="margin: 4px 0;"><strong>ID:</strong> ${email.email_id}</p>` : ''}
          </div>
          <div style="border-left: 4px solid #3b82f6; padding-left: 16px;">
            ${email.html || `<p style="white-space: pre-wrap;">${email.text || "(Sin contenido - el contenido completo puede no estar disponible en el webhook)"}</p>`}
          </div>
        </div>
      `,
      text: `
--------- Mensaje Reenviado ---------
De: ${email.from}
Para: ${emailTo}
Asunto: ${email.subject || "(Sin asunto)"}
Fecha: ${new Date(email.created_at).toLocaleString("es-ES")}
${email.email_id ? `ID: ${email.email_id}` : ''}

${email.text || "(Sin contenido - el contenido completo puede no estar disponible en el webhook)"}
      `,
      replyTo: email.from,
    };

    // Enviar el email reenviado
    const { data: sendData, error: sendError } =
      await resend.emails.send(forwardedEmail);

    if (sendError) {
      console.error("Error al reenviar email:", sendError);
      return NextResponse.json(
        { success: false, error: sendError.message },
        { status: 500 },
      );
    }

    console.log("Email reenviado exitosamente:", sendData);

    return NextResponse.json(
      {
        success: true,
        message: "Email procesado y reenviado",
        emailId: sendData?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error procesando webhook:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    );
  }
}

// Permitir verificación del endpoint
export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      message: "Webhook endpoint activo",
    },
    { status: 200 },
  );
}
