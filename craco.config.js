module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
      webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.map(
        (plugin) =>
          plugin.constructor.name === "CssMinimizerPlugin"
            ? new CssMinimizerPlugin({
              minimizerOptions: { preset: ["default", { svgo: false }] },
            })
            : plugin
      );

      return webpackConfig;
    },
  },
};
