const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "./");
}
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  assetsDir: "./",
  devServer: {
    port: 8888,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/api": {
        target: `http://localhost:${8888}/mock-api/v1`,
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  chainWebpack(config) {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // https://webpack.js.org/configuration/devtool/#development
    // config.when(process.env.NODE_ENV === "development", config =>
    //   config.devtool("cheap-source-map")
    // );
    // config.resolve.alias.set('@', path.resolve(__dirname, './src'));
    
    config.when(process.env.NODE_ENV !== "development", config => {
      config.optimization.splitChunks({
        chunks: "all",
        minSize: 10,
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial" // only package third parties that are initially dependent
          },
          elementUI: {
            name: "chunk-elementUI", // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: "chunk-commons",
            test: path.resolve(__dirname, "src/components"),
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      });
      config.optimization.runtimeChunk("single");
    });
  }
};
