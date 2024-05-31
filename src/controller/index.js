const controllerBooks = require('./books')
const controllerUsers = require('./users')
const service = require('../service')
const usersService = require('../service/users')
const config = require('../config')
const repository = require('../repository')
const utils = require('../utils')
const { userSchema, bookSchema } = require('../schemas')

module.exports = {
  controllerBooks: controllerBooks({
    service, bookSchema, config
  }),
  controllerUsers: controllerUsers({
    usersService, userSchema, config, repository, utils
  })
}