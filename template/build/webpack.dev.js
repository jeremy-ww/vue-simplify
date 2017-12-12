const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.base')
const { dev: { port, env } } = require('./config')
const { styleLoaders } = require('./utils')
const merge = require('webpack-merge')
const webpack = require('webpack')

console.log(`> Listen at http://localhost:${port}...`)

module.exports = merge(webpackBaseConfig, {
  module: {
    rules: styleLoaders()
  },
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    port,
    hot: true,
    quiet: true,
    noInfo: true,
    overlay: true,
    inline: true,
    stats: 'errors-only',
    clientLogLevel: 'none'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
})
