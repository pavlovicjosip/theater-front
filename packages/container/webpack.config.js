//THIS IS NOT USED, OLD CODE FOR PLAIN JS MICRO FRONTEND

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	mode: 'development',
	devServer: {
		port: 8083,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				movies: 'movies@http://localhost:8082/remoteEntry.js',
				favorites: 'favorites@http://localhost:8084/remoteEntry.js',
			},
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
