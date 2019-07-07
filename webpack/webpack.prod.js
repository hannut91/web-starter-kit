const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: __dirname + '/../dist',
    filename: 'main.js',
    publicPath: 'http://yunseok-starter-test.s3-website.ap-northeast-2.amazonaws.com/',
  },
  plugins: [
    new MinifyPlugin({
      removeConsole: true,
    }),
    new CompressionPlugin({
      deleteOriginalAssets: false,
      filename: '[file]'
    }),
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
