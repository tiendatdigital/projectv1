import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Optimize specific package imports to reduce bundle size
  experimental: {
    optimizePackageImports: [],
  },
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
