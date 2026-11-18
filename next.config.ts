import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/intro.html" }
      ]
    };
  }
};

export default nextConfig;
