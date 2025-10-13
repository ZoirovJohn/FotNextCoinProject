/** @type {import('next').NextConfig} */
const nextConfig = {
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
