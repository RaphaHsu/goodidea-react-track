const path = require('path')
module.exports = {
  context: path.resolve('src/'),
  entry: {
    client: './index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: './[name].bundle.js',
  }
}