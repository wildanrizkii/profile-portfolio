/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [70, 75, 85, 90, 95, 100],
  },
  allowedDevOrigins: ['192.168.75.183'],
};

export default nextConfig;

