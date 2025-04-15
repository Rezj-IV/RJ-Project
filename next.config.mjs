/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.digikala.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "*.technolife.ir",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
