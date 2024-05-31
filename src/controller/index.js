const controllerBooks = require('./books')
const controllerUsers = require('./users')
const usersService = require('../service/users')
const booksService = require('../service/books')
const config = require('../config')
const repository = require('../repository')
const utils = require('../utils')
const { userSchema, bookSchema } = require('../schemas')

module.exports = {
  controllerBooks: controllerBooks({
    booksService, bookSchema, config, repository
  }),
  controllerUsers: controllerUsers({
    usersService, userSchema, config, repository, utils
  })
}