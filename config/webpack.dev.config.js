const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('./webpack.base.config')({
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    path.join(process.cwd(), 'app/app.js')
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
    }),
  ],

  babelQuery: {
    presets: ['react-hmre']
  },

  devtool: 'inline-source-map'
});