const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    })
  ]
};
