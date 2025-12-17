/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://bizondigital.com',
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  // Experimental features to avoid glob issues
  experimental: {
    turbotrace: {
      logLevel: 'error',
      logDetail: false,
    },
  },
  
  // Exclude Windows system folders from webpack scanning
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    
    // Disable symlink resolution
    config.resolve.symlinks = false;
    
    // Limit snapshot to project directory
    config.snapshot = {
      managedPaths: [path.resolve(__dirname, 'node_modules')],
      immutablePaths: [],
      buildDependencies: {
        hash: true,
        timestamp: true,
      },
    };
    
    return config;
  },
  
  // Exclude problematic directories
  excludeDefaultMomentLocales: true,
  
  // Additional Next.js optimizations
  reactStrictMode: true,
  
  // Explicitly define what Next.js should process
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

module.exports = nextConfig;
