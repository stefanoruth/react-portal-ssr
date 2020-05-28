const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

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
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'all',
                    name: 'vendor',
                    priority: 10,
                    enforce: true,
                },
            },
        },
        usedExports: true,
        occurrenceOrder: true,
    },
    plugins: [new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false })],
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        publicPath: '/',
    },
}
