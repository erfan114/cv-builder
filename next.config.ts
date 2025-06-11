import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProduction ? "/cv-builder/" : "",
  basePath: isProduction ? "/cv-builder" : "",
  output: "export",
};

export default nextConfig;
