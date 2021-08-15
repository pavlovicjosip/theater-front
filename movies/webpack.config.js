//THIS IS NOT USED, OLD CODE FOR PLAIN JS MICRO FRONTEND

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
				'./MoviesIndex': './src/bootstrap',
			},
			shared: {
				faker: { singleton: true },
			},
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
