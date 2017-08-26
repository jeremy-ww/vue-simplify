var { production: { sso, api } } = require('./urls')

module.exports = {
  NODE_ENV: '"production"',
  SSO: JSON.stringify(sso),
  API: JSON.stringify(api)
}
