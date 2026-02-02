import { EmailTemplateParams } from '@/types/contact';

export function generateContactEmailHTML(params: EmailTemplateParams): string {
  return `
<!DOCTYPE html>
<html lang="fr-CA">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouvelle demande de contact</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">

  <!-- Header -->
  <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">TrueCare Supply</h1>
    <p style="color: #e0e7ff; margin: 5px 0 0 0;">Nouvelle demande de contact</p>
  </div>

  <!-- Content -->
  <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">

    <p style="font-size: 16px; color: #374151; margin-bottom: 25px;">
      Vous avez reçu une nouvelle demande de contact via le formulaire du site web.
    </p>

    <!-- Contact Info Card -->
    <div style="background: white; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <h2 style="color: #1f2937; font-size: 18px; margin-top: 0; margin-bottom: 15px; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
        Informations du contact
      </h2>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; width: 120px; font-weight: 600; color: #6b7280;">Nom:</td>
          <td style="padding: 10px 0; color: #1f2937;">${params.name}</td>
        </tr>
        <tr style="background: #f9fafb;">
          <td style="padding: 10px 0; font-weight: 600; color: #6b7280;">Email:</td>
          <td style="padding: 10px 0;">
            <a href="mailto:${params.email}" style="color: #2563eb; text-decoration: none;">
              ${params.email}
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: 600; color: #6b7280;">Téléphone:</td>
          <td style="padding: 10px 0;">
            <a href="tel:${params.phone}" style="color: #2563eb; text-decoration: none;">
              ${params.phone}
            </a>
          </td>
        </tr>
        <tr style="background: #f9fafb;">
          <td style="padding: 10px 0; font-weight: 600; color: #6b7280;">Date:</td>
          <td style="padding: 10px 0; color: #1f2937;">${params.timestamp}</td>
        </tr>
      </table>
    </div>

    <!-- Message Card -->
    <div style="background: white; border-radius: 8px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <h2 style="color: #1f2937; font-size: 18px; margin-top: 0; margin-bottom: 15px; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
        Message
      </h2>
      <div style="background: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #2563eb;">
        <p style="margin: 0; color: #374151; white-space: pre-wrap;">${params.message}</p>
      </div>
    </div>

    <!-- CTA Button -->
    <div style="margin-top: 30px; text-align: center;">
      <a href="mailto:${params.email}?subject=RE: Votre demande de contact"
         style="display: inline-block; background: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600;">
        Répondre au client
      </a>
    </div>

  </div>

  <!-- Footer -->
  <div style="background: #1f2937; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
    <p style="color: #9ca3af; margin: 0; font-size: 14px;">
      Ce message a été envoyé automatiquement depuis le formulaire de contact de TrueCare Supply
    </p>
    <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">
      © ${new Date().getFullYear()} TrueCare Supply - Tous droits réservés
    </p>
  </div>

</body>
</html>
  `.trim();
}

export function generateContactEmailPlainText(params: EmailTemplateParams): string {
  return `
TRUECARE SUPPLY - NOUVELLE DEMANDE DE CONTACT

Informations du contact:
-----------------------
Nom: ${params.name}
Email: ${params.email}
Téléphone: ${params.phone}
Date: ${params.timestamp}

Message:
--------
${params.message}

---
Ce message a été envoyé automatiquement depuis le formulaire de contact de TrueCare Supply.
  `.trim();
}
