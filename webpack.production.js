const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { webpack } = require("webpack");

// Any directories you will be adding code/files into
// need to be added to this array so webpack will pick them up
const defaultInclude = path.resolve(__dirname, "src");

module.exports = {
	mode: "production",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: "css-loader",
				include: defaultInclude,
			},
			{
				test: /\.jsx?$/,
				use: [{ loader: "babel-loader", loader: "@babel/preset-react" }],
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
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	target: "electron-renderer",
	plugins: [
		new HtmlWebpackPlugin(),
		// new webpack.DefinePlugin({
		// 	"process.env.NODE_ENV": JSON.stringify("production"),
		// }),
	],
};
