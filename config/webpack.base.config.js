const path = require('path')
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

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
      },
      { test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ] },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'postcss', 'sass' ] },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000"
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file'
      },

      // Use one of these to serve jQuery for Bootstrap scripts:

      // Bootstrap 4
      { test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/, loader: 'imports?jQuery=jquery' },
    ]
  },
  plugins: options.plugins,
  devtool: options.devtool,
  target: 'web',
  stats: false,
  progress: true,
  postcss: [ autoprefixer ],
})