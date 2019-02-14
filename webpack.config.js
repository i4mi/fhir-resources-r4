var webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.ts'),
    output: {
        filename: 'fhir_resources.js',
        path: path.join(__dirname + '/dist'),
        library: 'fhir_resources',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    mode: 'production',
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            '@fhir_resources': path.resolve('./src')
        }
    },
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                include: /\.min\.js$/,
            })  
        ]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                compilerOptions: {
                    outDir: './dist'
                }
            }
        }]
    },
};