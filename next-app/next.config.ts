import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "github-readme-stats.vercel.app" },
      { hostname: "github-readme-activity-graph.vercel.app" },
    ],
  },
};

export default nextConfig;
