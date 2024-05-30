const serviceBooks = require('./books')
const serviceUser = require('./users')
const repository = require('../repository')
const config = require('../config')
const utils = require('../utils')

module.exports = {
  getAllBooks: serviceBooks(repository, config).getAllBooks,
  getOneBook: serviceBooks(repository, config).getOneBook,
  createBook: serviceBooks(repository, config).createBook,
  updateBook: serviceBooks(repository, config).updateBook,
  deleteBook: serviceBooks(repository, config).deleteBook,
  //getAllUsers: serviceUser(repository, config).getAllUsers,
  // getOneUser: serviceUser(repository, config).getOneUser,
  // createUser: serviceUser(repository, config).createUser,
  // updateUser: serviceUser(repository, config).updateUser,
  // deleteUser: serviceUser(repository, config).deleteUser,
  // loginUser: serviceUser(repository, config, utils).loginUser,
}