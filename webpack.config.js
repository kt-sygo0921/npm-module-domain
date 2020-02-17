const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const convertRootPath = filename => path.resolve(__dirname, filename);

const basePath = '.';

module.exports = () => {
    return {
        mode: 'development',
        entry: `${basePath}/src/entorypoint/index.tsx`,
        output: {
            path: convertRootPath('dist'),
            filename: 'index.js',
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [{loader: 'babel-loader'}, {loader: 'ts-loader'}],
                    include: [convertRootPath('src')],
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: convertRootPath(`${basePath}/example/index.html`),
            }),
        ],
        devServer: {
            port: 3001,
            host: '0.0.0.0',
            disableHostCheck: true,
            contentBase: ['dist'],
            historyApiFallback: true,
        },
        performance: {
            hints: false,
        },
    };
};