import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function getRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const windowMs = 60 * 1000 // 1 minute window
  const maxRequests = 100 // Max requests per window

  const key = `ratelimit:${ip}`
  const current = rateLimitStore.get(key)

  if (!current || now > current.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
    return { allowed: true, remaining: maxRequests - 1 }
  }

  if (current.count >= maxRequests) {
    return { allowed: false, remaining: 0 }
  }

  current.count++
  return { allowed: true, remaining: maxRequests - current.count }
}

function isBot(userAgent: string): boolean {
  const botPatterns = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i,
    /facebook/i,
    /twitter/i,
    /linkedin/i,
  ]

  return botPatterns.some(pattern => pattern.test(userAgent))
}

function getClientIP(request: NextRequest): string {
  // Try various headers to get the real client IP
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cfConnectingIP = request.headers.get('cf-connecting-ip')

  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }

  if (realIP) {
    return realIP.trim()
  }

  if (cfConnectingIP) {
    return cfConnectingIP.trim()
  }

  return 'unknown'
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Get client IP
  const ip = getClientIP(request)
  const userAgent = request.headers.get('user-agent') || ''

  // Skip rate limiting for bots and static assets
  if (!isBot(userAgent) && !request.nextUrl.pathname.startsWith('/_next/')) {
    const rateLimit = getRateLimit(ip)

    if (!rateLimit.allowed) {
      return new NextResponse('Too Many Requests', {
        status: 429,
        headers: {
          'Content-Type': 'text/plain',
          'Retry-After': '60',
        },
      })
    }

    // Add rate limit headers
    response.headers.set('X-RateLimit-Limit', '100')
    response.headers.set('X-RateLimit-Remaining', rateLimit.remaining.toString())
  }

  // Security headers (additional to next.config.js)
  response.headers.set('X-Request-ID', Math.random().toString(36).substring(2, 15))
  response.headers.set('X-Timestamp', Date.now().toString())

  // HSTS (HTTP Strict Transport Security)
  if (request.nextUrl.protocol === 'https:') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    )
  }

  // Block suspicious patterns
  const suspiciousPatterns = [
    /eval\(/i,
    /javascript:/i,
    /vbscript:/i,
    /onload/i,
    /onerror/i,
    /<script/i,
    /union.*select/i,
    /drop.*table/i,
  ]

  const url = request.nextUrl.href
  const hasBody = request.method === 'POST' || request.method === 'PUT'

  if (suspiciousPatterns.some(pattern => pattern.test(url))) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  // Log security events (in production, send to monitoring service)
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Security] ${request.method} ${request.nextUrl.pathname} - IP: ${ip}`)
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
