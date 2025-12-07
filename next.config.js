/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dn0wyo8zm/**",
      },
    ],
  },
};

module.exports = nextConfig;

