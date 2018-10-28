import webpack from 'webpack';

export const devServer = function(options) {
	return {
		devServer: {
			historyApiFallback: true,
			hot: true,
			inline: true,
			stats: 'errors-only',
			host: options.host,
			port: options.port,
			contentBase: './client/dist',
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin({
				multistep: true
			})
		],
	};
};
