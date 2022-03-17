/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["imdb-api.com", "lanecdr.org"],
  },
};

module.exports = nextConfig;
