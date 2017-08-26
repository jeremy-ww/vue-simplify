var { testing: { sso, api } } = require('./url')

module.exports = {
  NODE_ENV: '"production"',
  SSO: JSON.stringify(sso),
  API: JSON.stringify(api)
}
