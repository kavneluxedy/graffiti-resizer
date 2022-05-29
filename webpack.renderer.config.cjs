const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ttf|css)$/,
        use: "css-loader",
      },
    ],
    rules: [
      {
        test: /\.(png|gif|jpg|jpeg|webp)$/,
        use: "file-loader",
      },
    ],
  },
};
