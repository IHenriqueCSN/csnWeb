const withNextIntl = require('next-intl/plugin')('./i18n/request.ts');

const nextConfig = {
    output: 'export',
    distDir: 'out',
    basePath: '/csnWeb',
  };

module.exports = withNextIntl({
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/',
        permanent: true,
      }
    ]
  },
})