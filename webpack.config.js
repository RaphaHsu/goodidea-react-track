const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve('src/'),
  entry: {
    client: './index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: './[name].[hash:8].js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ]
}