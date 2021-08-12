const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	mode: 'development',
	devServer: {
		port: 8084,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'favorites',
			filename: 'remoteEntry.js',
			exposes: {
				'./Favorites': './src/index',
			},
			shared: ['faker'],
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
