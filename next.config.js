/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      // "cdn.pixabay.com",
      "pixabay.com",
      // "images.pixabay.com",
      // "sources.pixabay.com",
      // "www.pixabay.com",
      // "api.pixabay.com",
    ],
  },
};

module.exports = nextConfig;
