/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    COCKPIT_URL: process.env.COCKPIT_URL,
    COCKPIT_API_KEY_LP: process.env.COCKPIT_API_KEY,
  },
};

module.exports = nextConfig
