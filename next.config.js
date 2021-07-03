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
};
module.exports = nextConfig;
