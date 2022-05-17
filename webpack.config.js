const path = require("path");

module.exports = {
  // mode: "development",
  entry: "public/renderer.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
};
