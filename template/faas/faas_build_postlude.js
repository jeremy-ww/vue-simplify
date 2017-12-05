const { build: { assetsRoot } } = require('../build/config')
const { resolve } = require('../build/utils')
const { cp } = require('shelljs')

cp(`${assetsRoot}/index.html`, `${assetsRoot}/200.html`)
cp(resolve('faas/install_*.sh'), `${assetsRoot}`)
