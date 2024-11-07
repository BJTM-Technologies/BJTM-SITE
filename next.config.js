/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "img.shields.io",
      "unsplash.com" // Add any other domains as needed
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
