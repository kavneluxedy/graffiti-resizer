const webpack = require("webpack");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loader = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.js",
	// target: "electron-renderer",
	output: {
		path: resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader",
				exclude: "",
			},
			{
				test: /\.css$/,
				use: "css-loader",
			},
			{
				test: /\.svg$/,
				use: "file-loader",
			},
			// {
			// 	test: /\.png$/,
			// 	use: [
			// 		{
			// 			loader: "url-loader",
			// 			options: {
			// 				mimetype: "image/png",
			// 			},
			// 		},
			// 	],
			// },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			templateContent: ({ htmlWebpackPlugin }) =>
				'<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
				htmlWebpackPlugin.options.title +
				'</title></head><body><div id="app"></div></body></html>',
			filename: "index.html",
		}),
		new MiniCssExtractPlugin(),
	],
};
