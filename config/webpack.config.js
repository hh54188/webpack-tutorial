var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './app.js',
    context: path.join(__dirname, '..'),
    output: {
        path: path.resolve('.'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
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
        contentBase: path.join(__dirname)
    },
    watch: true
}