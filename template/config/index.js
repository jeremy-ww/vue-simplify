module.exports = {
  dev: {
    env: {
      NODE_ENV: JSON.stringify('development')
    }
  },
  build: {
    env: {
      NODE_ENV: JSON.stringify('production')
    }
  }
}
