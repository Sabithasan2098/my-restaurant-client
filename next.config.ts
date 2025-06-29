import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.ibb.co"], // ✅ External Image Domain Allow
  },
};

export default nextConfig;
