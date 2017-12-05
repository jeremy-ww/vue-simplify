const { resolve } = require('./utils')
const config = require('../config/')

module.exports = {
  dev: {
    port: 8080,
    env: config.dev.env
  },
  build: {
    productionSourceMap: true,
    assetsSubDirectory: 'static',
    env: config.build.env,
    assetsRoot: resolve('dist')
  }
}
