const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const ClosurePlugin = require('closure-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: __dirname + '/../dist',
    filename: 'main.js',
    publicPath: 'https://yunseok.com',
  },
  plugins: [
    new MinifyPlugin({
      removeConsole: true,
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
    },
  }
});
