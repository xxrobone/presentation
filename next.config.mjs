/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  reactStrictMode: true,
  webpack(config) {
    // Add rule for handling SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });

    // Add rule for handling audio files
    config.module.rules.push({
      test: /\.(mp3|wav|m4a)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/audio/",
          outputPath: "static/audio/",
          name: "[name].[ext]",
        },
      },
    });

    return config;
  },
};

export default nextConfig;
