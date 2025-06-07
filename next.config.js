/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com'],
  },
  // Add experimental features to help with hydration
  experimental: {
    // This helps with hydration issues
    optimizeCss: true,
    // Improve client-side navigation
    scrollRestoration: true,
  }
}

module.exports = nextConfig
