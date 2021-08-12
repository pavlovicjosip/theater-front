const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	mode: 'development',
	devServer: {
		port: 8082,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'movies',
			filename: 'remoteEntry.js',
			exposes: {
				'./MoviesIndex': './src/index',
			},
			shared: ['faker'],
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
