var path = require("path");
var webpack = require("webpack");

var config = {
	devtool: "eval-source-map",
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, "src"),
				loader: "babel-loader"
			},
			{
				test: /\.scss$/,
				include: path.join(__dirname, "src"),
				loader: "style-loader!css-loader!sass-loader"
			}
		]
	},
	devServer: {
		inline: true,
		contentBase: "./dist",
		port: 3000
	}
};
module.exports = config;
