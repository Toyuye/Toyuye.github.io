const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "./");
}
module.exports = {
  devServer: {
    port: 8888,
    open: true
  }
};
