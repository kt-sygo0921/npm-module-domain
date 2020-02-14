const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const convertRootPath = filename => path.resolve(__dirname, filename);

const basePath = './src';

module.exports = () => {
    return {
        mode: "production",
        entry: `${basePath}/index.tsx`,
        output: {
            path: convertRootPath('esm'),
            filename: 'index.js',
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: "babel-loader"
                    },{
                        loader: "ts-loader",
                        options: {
                            configFile: "tsconfig.json"
                        }
                    }],
                    include: [convertRootPath('src')],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: convertRootPath(`${basePath}/index.html`),
            }),
        ],
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        devServer: {
            port: 3001,
            host: '0.0.0.0',
            disableHostCheck: true,
            contentBase: ['esm', 'static'],
        },
        performance: {
            hints: false,
        },
    };
};