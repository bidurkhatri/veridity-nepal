/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Netlify deployment
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // Security headers for production
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://source.unsplash.com https://images.unsplash.com https://ext.same-assets.com https://ugc.same-assets.com; font-src 'self'; connect-src 'self';"
          }
        ]
      }
    ]
  },

  // Security: disable powered by header
  poweredByHeader: false,

  // Production optimizations
  env: {
    CUSTOM_KEY: process.env.NODE_ENV
  }
};

module.exports = nextConfig;
