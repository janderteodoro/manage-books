const controllerBooks = require('./books')
const controllerUsers = require('./users')
const service = require('../service')
const config = require('../config')
const middlewares = require('../middlewares')
const { userSchema, bookSchema } = require('../schemas')

module.exports = {
  controllerBooks: controllerBooks(service, config, middlewares),
  controllerUsers: controllerUsers({service, userSchema, config, middlewares})
}