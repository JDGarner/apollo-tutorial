var path = require("path");
var webpack = require("webpack");

var config = {
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
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: true
			}
		})
	]
};
module.exports = config;
