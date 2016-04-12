const path = require('path')
const webpack = require('webpack');

module.exports = (options) => ({
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/'
  }, options.output),
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      }
    ]
  },
  plugins: options.plugins,
  resolve: {
    modulesDirectories: [
      'node_modules',
      'containers'
    ],
    extensions: [
      '',
      '.js'
    ]
  },
  devtool: options.devtool,
  target: 'web',
  stats: false,
  progress: true
})