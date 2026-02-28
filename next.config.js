/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Add this for Hostinger
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: true,  // Required when using output: 'export'
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;