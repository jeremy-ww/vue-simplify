const { env, productionSourceMap, assetsRoot, assetsSubDirectory } = require('./config').build
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.base')
const { styleLoaders } = require('./utils')
const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')

const assetsPath = _path => path.posix.join(assetsSubDirectory, _path)

module.exports = merge(webpackBaseConfig, {
  module: {
    rules: styleLoaders({ extract: true })
  },
  devtool: productionSourceMap ? '#source-map' : false,
  output: {
    path: assetsRoot,
    filename: assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new ExtractTextPlugin({
      filename: assetsPath('css/[name].[contenthash].css'),
      allChunks: true
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new UglifyJsPlugin({
      parallel: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks ({ resource }) {
        return resource && resource.includes('node_modules')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
})
