const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { webpack } = require("webpack");

// Any directories you will be adding code/files into
// need to be added to this array so webpack will pick them up
const defaultInclude = path.resolve(__dirname, "src");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/App.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "App.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "css-loader",
        include: defaultInclude,
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: defaultInclude,
      },
    ],
  },
};
