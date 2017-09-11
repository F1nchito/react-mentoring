const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname,'../src/locale'),
    entry: {
        'js/index':['./jsx/index.jsx', './sass/index.scss']
    },
    output:{
        path: path.resolve(__dirname,`../out/${process.env.NODE_ENV}/locale`),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module:{
        loaders:[
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }, 'sass-loader']
                })
            },
            {
                test: /.jsx?$/,
                exclude: [/node_modules/,/server/],
                use: {
                    loader: 'babel-loader',
                    options:{
                        plugins: ["transform-react-jsx"],
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(ttf|eot|svg|woff|png|jfif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'../locale/html/index.html',
            filename:'./index.html',
            title: 'Task1',
            hash: true
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../src/server/'),
            to: path.resolve(__dirname, `../out/${process.env.NODE_ENV}/server/`)
        }]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2
        })
    ]
};