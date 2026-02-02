interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// Map en memoria para rate limiting simple
// Para producción con múltiples instancias, considerar Redis o Upstash
const rateLimitMap = new Map<string, RateLimitEntry>();

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining?: number;
  resetTime?: number;
  retryAfter?: number;
}

export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = {
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5'),
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 min
  }
): RateLimitResult {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  // Limpiar entradas expiradas periódicamente
  if (rateLimitMap.size > 1000) {
    cleanupExpiredEntries(now);
  }

  // Si no hay entrada o expiró, crear nueva
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + config.windowMs,
    });
    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetTime: now + config.windowMs,
    };
  }

  // Si ya alcanzó el límite
  if (entry.count >= config.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
      retryAfter: Math.ceil((entry.resetTime - now) / 1000), // segundos
    };
  }

  // Incrementar contador
  entry.count++;
  rateLimitMap.set(identifier, entry);

  return {
    allowed: true,
    remaining: config.maxRequests - entry.count,
    resetTime: entry.resetTime,
  };
}

function cleanupExpiredEntries(now: number) {
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}

// Obtener IP del cliente
export function getClientIp(request: Request): string {
  // Intentar obtener IP de headers comunes
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIp) {
    return realIp;
  }
  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  return 'unknown';
}
