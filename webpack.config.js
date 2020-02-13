const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const convertRootPath = filename => path.resolve(__dirname, filename);

const basePath = './';

module.exports = () => {
    return {
        entry: `${basePath}/src/index.tsx`,
        output: {
            path: convertRootPath('dist'),
            filename: 'index.js',
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            ...JSON.parse(fs.readFileSync(convertRootPath('./.babelrc'))),
                        },
                    },
                    exclude: {
                        include: /node_modules/,
                    },
                },
                {
                    test: /\.tsx?$/,
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
            contentBase: ['dist', 'static'],
        },
        performance: {
            hints: false,
        },
    };
};