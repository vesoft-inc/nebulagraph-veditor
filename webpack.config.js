const path = require("path");
const webpack = require("webpack");
const devMode = process.env.SYS_ENV !== "production";

module.exports = {
	cache: true,
	entry: {
		app: "./index.js"
	},
	output: {
		filename: "index.js"
	},

	devServer: {
		host: "0.0.0.0",
		port: "7799",
		open: true,
		openPage: "./public/index.html",
		contentBase: "./",
		hot: true
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)|dist/,
				use: {
					loader: "babel-loader?cacheDirectory=true"
				}
			},
			{
				test: /\.css$/,
				use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"]
			},
			{
				test: /\.less$/,
				use: [
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					{
						loader: "css-loader"
					},
					{
						loader: "less-loader"
					}
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: "url-loader"
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: "url-loader"
			}
		]
	}
};
