/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    turbotrace: false,
  },
  // configuro los endpoints
  env: {
    API_URL: 'https://jsonplaceholder.typicode.com',
  },
};

module.exports = nextConfig;
