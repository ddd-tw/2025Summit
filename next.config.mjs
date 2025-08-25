/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/2025',
  trailingSlash: true,
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
