/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.akamai.steamstatic.com",
        port: "",
        pathname: "/apps/dota2/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
