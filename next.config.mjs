/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/2025',
  trailingSlash: true,
  basePath: '/2025',
  assetPrefix: '/2025',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
