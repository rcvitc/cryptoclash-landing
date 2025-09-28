import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  images: { unoptimized: true },
  devIndicators: false,
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
