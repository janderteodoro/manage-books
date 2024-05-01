const serviceBooks = require('./books')
const repository = require('../repository')
const config = require('../config')

module.exports = {
  getAllBooks: serviceBooks(repository, config).getAllBooks,
  getOneBook: serviceBooks(repository, config).getOneBook,
  createBook: serviceBooks(repository, config).createBook,
  updateBook: serviceBooks(repository, config).updateBook,
  deleteBook: serviceBooks(repository, config).deleteBook
}