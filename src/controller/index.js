const controllerBooks = require('./books')
const service = require('../service')
const config = require('../config')

module.exports = {
  controllerBooks: controllerBooks(service, config)
}