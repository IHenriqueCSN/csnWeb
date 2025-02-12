const nextConfig = {
    output: 'export',
    distDir: 'out',
    basePath: '/csnWeb',
  };

module.exports = {
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/',
        permanent: true,
      }
    ]
  }
}