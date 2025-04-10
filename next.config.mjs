/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shopping-phinf.pstatic.net",
      },
      {
        protocol: "https",
        hostname: "chamomile.lotteinnovate.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/naver/:path*",
        destination: "https://openapi.naver.com/:path*",
      },
    ];
  },
};

export default nextConfig;
