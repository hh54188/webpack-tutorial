var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, '..'),
    entry: {
        app: './entry/app.js'
    },
    output: {
        path: path.resolve('.', 'output'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }, {
            test: /\.js|jsx$/,
            exclude: '/node_modules/',
            loaders: ['babel-loader']
        }]
    },
    resolve: {
        alias: {
            scripts: path.join(__dirname, '..', 'src', 'scripts'),
            styles: path.join(__dirname, '..', 'src', 'styles')            
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
        // contentBase: path.join(__dirname)
    },
    watch: true
}