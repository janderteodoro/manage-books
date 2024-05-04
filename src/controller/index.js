const controllerBooks = require('./books')
const controllerUsers = require('./users')
const service = require('../service')
const config = require('../config')
const middlewares = require('../middlewares')

module.exports = {
  controllerBooks: controllerBooks(service, config, middlewares),
  controllerUsers: controllerUsers(service, config, middlewares)
}