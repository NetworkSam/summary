var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loaders:'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                loaders:'style-loader!css-loader',
                exclude:/node_modules/
            },
            {
                test: /\.vue$/,
                loaders:'vue-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};