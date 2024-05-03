const controllerBooks = require('./books')
const controllerUsers = require('./users')
const service = require('../service')
const config = require('../config')

module.exports = {
  controllerBooks: controllerBooks(service, config),
  controllerUsers: controllerUsers(service, config)
}