/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for Next.js 15
  experimental: {
    // Enable optimizePackageImports for better bundle optimization
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
  
  // Configure SCSS support
  sassOptions: {
    includePaths: ['./src', './app'],
  },
  
  // Image optimization
  images: {
    domains: [], // Add your image domains here
    formats: ['image/webp', 'image/avif'],
  },
  
  // Compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Enable strict mode
  reactStrictMode: true,
  
  // Output configuration
  output: 'standalone',
  
  // TypeScript configuration
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has TypeScript errors (not recommended for production)
    ignoreBuildErrors: false,
  },
  
  // ESLint configuration
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors (not recommended for production)
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;

