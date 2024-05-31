const express = require('express')
const router = express.Router()
const controller = require('../controller')
const middlewares = require('../middlewares')

router.get('/books', controller.controllerBooks.getAllBooks)
router.get('/books/:id', controller.controllerBooks.getOneBook)
router.post('/books', controller.controllerBooks.createBook)
router.patch('/books/:id', controller.controllerBooks.updateBook)
router.delete('/books/:id', controller.controllerBooks.deleteBook)

router.post('/users', middlewares.validatePassword, middlewares.encryptPass, controller.controllerUsers.createUser)
router.get('/users', controller.controllerUsers.getAllUsers)
router.get('/users/:id', controller.controllerUsers.getOneUser)
router.patch('/users/:id', controller.controllerUsers.updateUser)
//router.delete('/users/:id', middlewares.jwtValidate, controller.controllerUsers.deleteUser)
//router.post('/users/login', middlewares.encryptPass, controller.controllerUsers.loginUser)

module.exports = router
