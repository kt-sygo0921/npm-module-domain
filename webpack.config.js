const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const convertRootPath = filename => path.resolve(__dirname, filename);

const basePath = './';

module.exports = () => {
    return {
        mode: "production",
        entry: `${basePath}/src/index.tsx`,
        output: {
            path: convertRootPath('umd'),
            filename: 'index.umd.js',
            library: "npm-module-domain",
            libraryTarget: "umd"
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
                            configFile: "tsconfig.umd.json"
                        }
                    }],
                    include: [convertRootPath('src')],
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },
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