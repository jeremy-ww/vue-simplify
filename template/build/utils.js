const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

function cssLoaders (options = { sourceMap: false, extract: false }) {
  const loaders = ['css-loader']
  return options.extract
    ? ExtractTextPlugin.extract({ use: loaders, fallback: 'vue-style-loader' })
    : ['vue-style-loader'].concat(loaders)
}

function styleLoaders (options) {
  return [{
    test: /\.css$/,
    use: cssLoaders(options)
  }]
}

module.exports = {
  resolve: dir => path.join(__dirname, '..', dir),
  cssLoaders,
  styleLoaders
}
