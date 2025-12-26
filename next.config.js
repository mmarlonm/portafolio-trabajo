/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portafolio-trabajo',
  assetPrefix: '/portafolio-trabajo', // Sin el slash final
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig