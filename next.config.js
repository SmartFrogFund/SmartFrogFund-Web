/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pagesDir:'src/app',
  webpack: config => {
    
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
};

module.exports = nextConfig;
