/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    deviceSizes: [320, 480, 640, 750, 820, 1020, 1200],
    domains: [
      "res.cloudinary.com",
      "https://picsum.photos",
      "https://istockphoto.com",
      "www.instagram.com",
      "https://www.youtube.com"
    ],
  },
  future: { webpack5: true },
  // swcMinify: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: "file-loader",
      },
    });
    return config;
  },
};

module.exports = nextConfig;
