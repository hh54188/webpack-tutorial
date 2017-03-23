var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        // path: path.resolve('.'),
        path: path.join(__dirname),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    // watch: true
}