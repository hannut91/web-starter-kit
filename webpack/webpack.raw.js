const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const PurgecssPlugin = require('purgecss-webpack-plugin')
const autoprefixer = require('autoprefixer');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: __dirname + '/../dist',
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    }),
  ]
});
