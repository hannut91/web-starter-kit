const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Title',
      template: './src/index.html',
      filename: 'index.html',
      hash: true,
      meta: {
        viewport: 'width=device-width, initial-scale=1',
      },
    })
  ]
}
