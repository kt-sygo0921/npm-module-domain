const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const convertRootPath = filename => path.resolve(__dirname, filename);

const basePath = './src/features';

module.exports = () => {
    return {
        mode: 'development',
        entry: `${basePath}/index.tsx`,
        output: {
            path: convertRootPath('lib'),
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
        performance: {
            hints: false,
        },
    };
};