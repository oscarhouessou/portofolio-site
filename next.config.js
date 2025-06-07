/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['drive.google.com'],
    unoptimized: true,
  },
  basePath: '/portofolio-site',
  // Add experimental features to help with hydration
  experimental: {
    // This helps with hydration issues
    optimizeCss: true,
    // Improve client-side navigation
    scrollRestoration: true,
  }
}

module.exports = nextConfig
