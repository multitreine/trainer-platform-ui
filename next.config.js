/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    COCKPIT_URL: process.env.COCKPIT_URL,
    COCKPIT_API_KEY_LP: process.env.COCKPIT_API_KEY_LP,
    BACKEND_URL: process.env.BACKEND_URL,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig
