const controllerBooks = require('./books')
const controllerUsers = require('./users')
const userValidation = require('../service/users/userValidation')
const service = require('../service')
const usersService = require('../service/users')
const config = require('../config')
const middlewares = require('../middlewares')
const repository = require('../repository')
const { userSchema, bookSchema } = require('../schemas')

module.exports = {
  controllerBooks: controllerBooks({service, bookSchema, config, middlewares}),
  controllerUsers: controllerUsers({usersService, userValidation, userSchema, config, repository, middlewares})
}