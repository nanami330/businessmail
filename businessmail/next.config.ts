import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  srcDir: "src",
  output: "standalone" // ← これが超重要！
};

export default nextConfig;
