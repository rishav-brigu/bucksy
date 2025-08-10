/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Enable swcMinify for faster builds
  swcMinify: true,

  // Experimental features
  experimental: {
    // Enable app directory (App Router)
    appDir: true,
    // Enable server components
    serverComponentsExternalPackages: [],
  },

  // Image optimization
  images: {
    domains: [],
    // Configure image loader if needed
    // loader: 'custom',
  },

  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Custom webpack config if needed
    return config;
  },

  // Redirects
  async redirects() {
    return [];
  },

  // Rewrites
  async rewrites() {
    return [];
  },

  // Headers
  async headers() {
    return [];
  },
};

module.exports = nextConfig;
