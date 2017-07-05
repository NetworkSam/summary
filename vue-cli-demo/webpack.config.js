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
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                loaders:'style-loader!css-loader',
                exclude:/node_modules/
            },
            {
                test: /\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};