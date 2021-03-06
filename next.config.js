const nextConfig = {
  target: "serverless",
  webpack: function (config, { isServer }) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    if (isServer) {
      require("./scripts/generate-sitemap");
    }

    return config;
  },
  images: {
    domains: ["ik.imagekit.io"],
  },
};
module.exports = nextConfig;
