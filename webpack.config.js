const htmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new htmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    htmlPlugin
  ],
  devServer: {
    open: true
  }
};
