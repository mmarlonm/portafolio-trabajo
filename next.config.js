/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Siempre usar basePath para GitHub Pages
  basePath: "/portafolio-trabajo",
  assetPrefix: "/portafolio-trabajo/",
};

module.exports = nextConfig;