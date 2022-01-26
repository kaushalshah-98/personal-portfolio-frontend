/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "/images"],
  },
  webpack: function (config) {
    return config;
  },
};

module.exports = nextConfig;
