/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['open.spotify.com'],
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig 