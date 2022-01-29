/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "miro.medium.com", "/images"],
  },
  webpack: function (config) {
    return config;
  },
};

module.exports = nextConfig;
