
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./config/helpers');

const config = {
    entry: {
        'app': './config/app/main.ts',
        'polyfills': './config/app/polyfills.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: ['raw-loader']
            },
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader?{configFileName: "tsconfig.json"}',
                    'angular2-template-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.html', '.css']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: "index.html"
        })
    ]
}

module.exports = config;