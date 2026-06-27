import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400
  },
  async headers() {
    const staticAssetCache = "public, max-age=86400, stale-while-revalidate=604800";

    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: staticAssetCache
          }
        ]
      },
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: staticAssetCache
          }
        ]
      }
    ];
  }
};

export default nextConfig;
