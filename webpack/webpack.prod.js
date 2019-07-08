const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin')
const autoprefixer = require('autoprefixer');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: __dirname + '/../dist',
    publicPath: 'http://yunseok-starter-test.s3-website.ap-northeast-2.amazonaws.com/',
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    }),
    new MinifyPlugin({
      removeConsole: true,
    }),
    // new CompressionPlugin({
    //   deleteOriginalAssets: false,
    //   filename: '[file]'
    // }),
    new PurgecssPlugin({
      paths: glob.sync(__dirname + '/../src/**/*', {nodir: true}),
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
