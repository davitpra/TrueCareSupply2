import { z } from 'zod';

// Schema Zod para validación robusta
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Le nom est requis')
    .max(100, 'Le nom est trop long')
    .trim(),
  email: z
    .string()
    .min(1, "L'email est requis")
    .email('Email invalide')
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .min(1, 'Le téléphone est requis')
    .regex(/^[\d\s\-\+\(\)]{10,}$/, 'Numéro de téléphone invalide')
    .trim(),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(5000, 'Le message est trop long')
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ValidationResult {
  success: boolean;
  data?: ContactFormData;
  errors?: Record<string, string>;
}

export function validateContactForm(data: unknown): ValidationResult {
  try {
    const validatedData = contactFormSchema.parse(data);
    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0].toString()] = err.message;
        }
      });
      return { success: false, errors };
    }
    return { success: false, errors: { general: 'Validation failed' } };
  }
}

// Sanitización de datos
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remover < y >
    .trim();
}
