const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
module.exports = withPlugins([withImages], {
  webpack: (config) => {
    // custom webpack config
    return config;
  },
  images: {},
});