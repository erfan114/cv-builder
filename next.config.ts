import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProduction ? process.env.NEXT_PUBLIC_CDN_PATH : undefined,
  basePath: isProduction ? process.env.NEXT_PUBLIC_CDN_PATH : undefined,
  output: "export",
};

export default nextConfig;
