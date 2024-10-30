const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: './src/indexAbuelo.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	cache: {
		type: 'filesystem',
	},
	experiments: { topLevelAwait: true },
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
};
