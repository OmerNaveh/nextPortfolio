/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV = "production");

const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: isProd ? "/nextPortfolio" : "",
  assetPrefix: isProd ? "/nextPortfolio/" : "",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
