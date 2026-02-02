import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm, sanitizeInput } from '@/lib/validation/contactValidation';
import { checkRateLimit, getClientIp } from '@/lib/utils/rateLimit';
import { sendContactEmail } from '@/lib/email/emailService';

export async function POST(request: NextRequest) {
  try {
    // 1. Rate Limiting
    const clientIp = getClientIp(request);
    const rateLimitResult = checkRateLimit(clientIp);

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: 'Trop de tentatives. Veuillez réessayer plus tard.',
          code: 'RATE_LIMIT_EXCEEDED',
          retryAfter: rateLimitResult.retryAfter,
        },
        {
          status: 429,
          headers: {
            'Retry-After': rateLimitResult.retryAfter?.toString() || '900',
            'X-RateLimit-Limit': process.env.RATE_LIMIT_MAX_REQUESTS || '5',
            'X-RateLimit-Remaining': rateLimitResult.remaining?.toString() || '0',
            'X-RateLimit-Reset': rateLimitResult.resetTime?.toString() || '',
          },
        }
      );
    }

    // 2. Parsear y validar datos
    const body = await request.json();
    const validationResult = validateContactForm(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Données invalides',
          code: 'VALIDATION_ERROR',
          errors: validationResult.errors,
        },
        { status: 400 }
      );
    }

    const formData = validationResult.data!;

    // 3. Sanitizar datos (protección adicional)
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: formData.email.toLowerCase(),
      phone: sanitizeInput(formData.phone),
      message: sanitizeInput(formData.message),
    };

    // 4. Enviar email
    const emailResult = await sendContactEmail(sanitizedData);

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error);
      return NextResponse.json(
        {
          success: false,
          error: "Erreur lors de l'envoi du message. Veuillez réessayer.",
          code: 'EMAIL_SEND_FAILED',
        },
        { status: 500 }
      );
    }

    // 5. Respuesta exitosa
    return NextResponse.json(
      {
        success: true,
        message: 'Message envoyé avec succès',
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Remaining': rateLimitResult.remaining?.toString() || '0',
        },
      }
    );
  } catch (error) {
    console.error('Error in contact API:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Une erreur est survenue. Veuillez réessayer.',
        code: 'INTERNAL_ERROR',
      },
      { status: 500 }
    );
  }
}

// Método OPTIONS para CORS (opcional)
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
