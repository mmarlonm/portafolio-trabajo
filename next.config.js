/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portafolio-trabajo',
  // Forzamos a que los assets ignoren el basePath duplicado
  assetPrefix: '/portafolio-trabajo', 
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Esto asegura que Next.js no intente optimizar de más las rutas
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig