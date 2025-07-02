// Security utilities for Veridity platform
// Input validation and sanitization functions

type ValidInput = string | number | boolean | ValidInput[] | { [key: string]: ValidInput } | null;

// Sanitize string input to prevent XSS
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }

  return input
    .replace(/[<>\"']/g, '') // Remove potential XSS characters
    .trim()
    .slice(0, 1000); // Limit length to prevent buffer overflow
}

// Validate citizenship number format for Nepal
export function validateCitizenshipNumber(citizenshipNumber: string): boolean {
  const sanitized = sanitizeInput(citizenshipNumber);
  // Nepal citizenship format: XX-XX-XX-XXXXX (13 digits with dashes)
  const pattern = /^\d{2}-\d{2}-\d{2}-\d{5}$/;
  return pattern.test(sanitized);
}

// Validate email format
export function validateEmail(email: string): boolean {
  const sanitized = sanitizeInput(email);
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(sanitized) && sanitized.length <= 254;
}

// Validate and sanitize API endpoint inputs
export function validateAPIInput(input: unknown): ValidInput {
  if (typeof input === 'string') {
    return sanitizeInput(input);
  }

  if (typeof input === 'number') {
    if (!Number.isFinite(input) || Math.abs(input) > Number.MAX_SAFE_INTEGER) {
      throw new Error('Invalid number input');
    }
    return input;
  }

  if (typeof input === 'boolean') {
    return input;
  }

  if (input === null) {
    return null;
  }

  if (Array.isArray(input)) {
    return input.slice(0, 100).map(item => validateAPIInput(item)); // Limit array size
  }

  if (typeof input === 'object' && input !== null) {
    const sanitized: { [key: string]: ValidInput } = {};
    const keys = Object.keys(input).slice(0, 50); // Limit object properties

    for (const key of keys) {
      const sanitizedKey = sanitizeInput(key);
      sanitized[sanitizedKey] = validateAPIInput((input as Record<string, unknown>)[key]);
    }

    return sanitized;
  }

  throw new Error('Invalid input type');
}

// Rate limiting check (simple implementation)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(identifier: string, maxRequests = 100, windowMs = 60000): boolean {
  const now = Date.now();
  const entry = requestCounts.get(identifier);

  if (!entry || now > entry.resetTime) {
    requestCounts.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) {
    return false;
  }

  entry.count++;
  return true;
}

// Generate secure random tokens
export function generateSecureToken(length = 32): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

// Validate ZK proof format
export function validateZKProof(proof: unknown): boolean {
  if (!proof || typeof proof !== 'object') {
    return false;
  }

  const requiredFields = ['proof', 'publicSignals', 'proofType', 'timestamp'];
  return requiredFields.every(field => field in (proof as Record<string, unknown>));
}

// Content Security Policy validation
export function validateImageURL(url: string): boolean {
  const allowedDomains = [
    'source.unsplash.com',
    'images.unsplash.com',
    'ext.same-assets.com',
    'ugc.same-assets.com'
  ];

  try {
    const urlObj = new URL(url);
    return allowedDomains.includes(urlObj.hostname) && urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

// Clean sensitive data from logs
export function sanitizeForLogging(data: unknown): unknown {
  const sensitiveFields = [
    'password',
    'token',
    'key',
    'secret',
    'privateKey',
    'citizenship',
    'birthDate'
  ];

  if (typeof data === 'object' && data !== null) {
    const cleaned = { ...data } as Record<string, unknown>;

    for (const field of sensitiveFields) {
      if (field in cleaned) {
        cleaned[field] = '[REDACTED]';
      }
    }

    return cleaned;
  }

  return data;
}
