const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port:8080,
        contentBase: './public',

    },
    resolve: {
        extensions: ['','.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    modules: {
        loaders: [{
            teste: /.js[x]?$/,
            exclude: /node_modules/,
            query: {
                preset: ['es2015', 'react'],
                plugin: ['transform-object-rest-spread']
            }
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style.loader', 'css-loader')
        },{
           test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
           loader: 'file' 
        }]
    }
}
