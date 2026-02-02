import { Resend } from "resend";
import {
  generateContactEmailHTML,
  generateContactEmailPlainText,
} from "./templates/contactEmailTemplate";
import { ContactFormData } from "@/types/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailResult {
  success: boolean;
  error?: string;
  data?: unknown;
}

export async function sendContactEmail(
  formData: ContactFormData,
): Promise<EmailResult> {
  try {
    // Validar que la API key esté configurada
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no está configurada");
      return { success: false, error: "Email service not configured" };
    }

    // Generar timestamp en zona horaria de Toronto
    const timestamp = new Date().toLocaleString("fr-CA", {
      timeZone: "America/Toronto",
      dateStyle: "long",
      timeStyle: "short",
    });

    // Preparar parámetros del template
    const templateParams = {
      ...formData,
      timestamp,
    };

    // Configurar email
    const emailOptions = {
      from:
        process.env.EMAIL_FROM || "TrueCare Supply <noreply@truecaresupply.ca>",
      to: process.env.EMAIL_TO || "j.david.prado1716@gmail.com",
      replyTo: formData.email,
      subject: `Nouvelle demande de contact - ${formData.name}`,
      html: generateContactEmailHTML(templateParams),
      text: generateContactEmailPlainText(templateParams),
    };

    // Enviar email
    const { data, error } = await resend.emails.send(emailOptions);

    if (error) {
      console.error("Error al enviar email con Resend:", error);
      return { success: false, error: error.message };
    }

    console.log("Email enviado exitosamente:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error inesperado al enviar email:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Error desconocido al enviar email",
    };
  }
}
