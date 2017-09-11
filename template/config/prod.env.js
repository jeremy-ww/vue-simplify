var { testing: { sso, api }, crayfish } = require('./url')

module.exports = {
  NODE_ENV: '"production"',
  SSO: JSON.stringify(sso),
  API: JSON.stringify(api),
  CRAYFISH: JSON.stringify(crayfish)
}
