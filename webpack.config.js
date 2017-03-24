var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './app.js',
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
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
    // watch: true
}