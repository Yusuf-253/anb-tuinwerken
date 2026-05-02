import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Verplaats het van experimental naar de root van het object
  allowedDevOrigins: ["172.29.0.1", "localhost:3000"],
};

export default nextConfig;