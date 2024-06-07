/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://tailus.io',
        port: '',
        pathname: '/sources/blocks/stats-cards/preview/images/**'
      }
    ]
  }
};

export default nextConfig;
