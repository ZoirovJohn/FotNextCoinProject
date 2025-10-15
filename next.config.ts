/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // disables sharp optimization
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:4100/:path*", // NestJS
      },
    ];
  },
};

module.exports = nextConfig;
