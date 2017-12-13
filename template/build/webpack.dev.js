const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.base')
const { dev: { port, env } } = require('./config')
const { styleLoaders } = require('./utils')
const merge = require('webpack-merge')
const webpack = require('webpack')

class CompileDoneWebpackPlugin {
  apply (compiler) {
    compiler.plugin('done', compilation => {
      if (++CompileDoneWebpackPlugin.count && CompileDoneWebpackPlugin.count > 1) return
      console.log('\x1b[1m\x1b[34m' + `> Listen at http://localhost:${port}` + '\x1b[39m\x1b[22m')
    })
  }
}

CompileDoneWebpackPlugin.count = 0

console.log('> Starting dev server...')

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
    disableHostCheck: true,
    clientLogLevel: 'warning'
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
    new FriendlyErrorsPlugin(),
    new CompileDoneWebpackPlugin()
  ]
})
