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
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: "file-loader?name=img/[name]__[hash:base64:5].[ext]" }],
        include: defaultInclude,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          { loader: "file-loader?name=font/[name]__[hash:base64:5].[ext]" },
        ],
        include: defaultInclude,
      },
    ],
  },
  target: "electron-renderer",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
