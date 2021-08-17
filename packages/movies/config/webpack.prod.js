const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'movies',
			filename: 'remoteEntry.js',
			publicPath: './movies/latest/',
			exposes: {
				'./Movies': './src/bootstrap',
			},
			shared: packageJson.dependencies,
		}),
	],
};
module.exports = merge(commonConfig, prodConfig);
