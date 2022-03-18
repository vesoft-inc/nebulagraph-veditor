module.exports = {
	mode: "production",
	entry: {
		app: "./src/MMEditor.js"
	},
	output: {
		library: "MMEditor",
		libraryTarget: "umd",
		libraryExport: "default", // 默认导出
		filename: "MMEditor.js"
	},
	externals: {
		canvg: "canvg",
		uuid:"uuid",
		classnames:"classnames"
	},
	optimization: {
		minimize: false
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader?cacheDirectory=true"
				}
			},

			{
				test: /\.less$/,
				use: [
					"style-loader",
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
