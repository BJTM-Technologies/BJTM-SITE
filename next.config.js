/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization for static exports
    domains: [
      "localhost",
      "img.shields.io",
      "unsplash.com", // Add any other domains as needed
    ],
    dangerouslyAllowSVG: true, // Allow SVG images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
