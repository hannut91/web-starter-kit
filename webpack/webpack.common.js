const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    login: [
      './src/pages/login/login.js',
      './src/pages/login/login.scss'
    ],
    global: [
      './src/style.scss',
      // path.resolve(__dirname + '/../node_modules/swiper/dist/css/swiper.css')
    ],
  },
  output: {
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: process.env.NODE_ENV === 'production',
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV !== 'production',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/pages/login/login.html',
      filename: 'login.html',
      hash: true,
      meta: {
        viewport: 'width=device-width, initial-scale=1',
      },
      chunks: ['login', 'global']
    }),
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
   ],
  }
}
