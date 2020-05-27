const path = require('path')

module.exports = {
	entry: {
		main: './src/client.tsx',
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json'],
	},
	output: {
		path: path.resolve(__dirname, 'dist/public'),
		publicPath: '/',
	},
}
