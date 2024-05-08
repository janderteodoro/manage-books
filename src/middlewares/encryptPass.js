const bcrypt = require('bcrypt')
const config = require('../config')

module.exports = (request, response, next) => {
  const { password } = request.body
  const hash = bcrypt.hashSync(password, config.secretSalt)
  request.body.password = hash
  next()
}
