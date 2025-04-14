/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "ghchart.rshah.org",
      },
    ],
  },
};

export default nextConfig;
