/** @type {import('next').NextConfig} */
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
  
  // Webpack configuration to avoid Windows issues
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    
    // Disable symlink resolution to avoid permission issues
    config.resolve.symlinks = false;
    
    // Limit file watching to project directory only
    config.watchOptions = {
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/.next/**',
        '**/C:/Users/**/Application Data/**',
        '**/C:/Users/**/AppData/**',
      ],
    };
    
    return config;
  },
  
  // Additional optimizations
  reactStrictMode: true,
  
  // Page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Output configuration for Vercel
  output: 'standalone',
};

module.exports = nextConfig;
