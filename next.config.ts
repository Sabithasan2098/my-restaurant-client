import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.ibb.co"], // ✅ External Image Domain Allow
  },
  env: {
    BASE_ROUTES: process.env.BASE_ROUTES,
  },
};

export default nextConfig;
