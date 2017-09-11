var path = require('path')
var { cp } = require('shelljs')
var { build: { assetsRoot: dist } } = require('../config')

var resolve = p => path.resolve(__dirname, p)

cp(`${dist}/index.html`, `${dist}/200.html`)

cp(resolve('install_*.sh'), `${dist}`)
