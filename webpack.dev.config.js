var ExtractTextPlugin = require('extract-text-webpack-plugin');

var SRC_DIR = './src/js/';
var DIST_DIR = './assets/';

module.exports = {
	entry: {
		app: [
			'babel-polyfill', SRC_DIR + 'app.jsx',
			// './node_modules/jquery/dist/jquery.min.js'
		],
	},

	output: {
		path: DIST_DIR,
		filename: '/js/[name].js',
		comments: true
	},

	module: {
		// preLoaders: [
		// 	{
		// 		test: /\.js/,
		// 		loader: 'eslint-loader',
		// 		exclude: /node_modules/
		// 	}
		// ],
		loaders: [
			{
				test: /(\.jsx|\.js)$/,
				exclude: /node_modules/,
				loader: [
					'babel'
				],
				query: {
					presets:['es2015', 'react', 'stage-0']
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000'
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('/css/[name].css'),
	]
};