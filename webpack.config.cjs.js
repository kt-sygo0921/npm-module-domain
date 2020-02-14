const fs = require('fs');
const path = require('path');

const convertRootPath = filename => path.resolve(__dirname, filename);

const basePath = './src';

module.exports = () => {
    return {
        mode: "production",
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
                    use: [{
                        loader: "babel-loader"
                    },{
                        loader: "ts-loader",
                        options: {
                            configFile: "tsconfig.cjs.json"
                        }
                    }],
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