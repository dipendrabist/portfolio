const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  output: "export", // ✅ static export
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js"],
  eslint: {
    dirs: ["src"], // ✅ was misplaced before
  },
  images: {
    unoptimized: true, // ✅ required for static export
  },
  trailingSlash: true, // ✅ helps routing for static export
  assetPrefix: "/", // ✅ ensures assets load correctly locally or on static hosts
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };
    return config;
  },
});

module.exports = nextConfig;
