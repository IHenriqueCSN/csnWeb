import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Supported locales
  locales: ['en', 'pt'],
  // Default locale
  defaultLocale: 'pt',
  // Enable locale detection
  localeDetection: true,
});

export const config = {
  // Match all routes except for static files and API routes
  matcher: [
    '/((?!api|_next|.*\\..*).*)'
  ]
};