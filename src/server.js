const express = require('express')
const controller = require('./controller')
const middlewares = require('./middlewares')

const app = express()

app.use(express.json())

app.get('/books', controller.controllerBooks.getAllBooks)

app.get('/books/:id', controller.controllerBooks.getOneBook)

app.post('/books', controller.controllerBooks.createBook)

app.patch('/books/:id', controller.controllerBooks.updateBook)

app.delete('/books/:id', controller.controllerBooks.deleteBook)

app.post('/users', middlewares.validatePassword, middlewares.encryptPass, controller.controllerUsers.createUser)

app.get('/users', controller.controllerUsers.getAllUsers)

app.get('/users/:id', controller.controllerUsers.getOneUser)

app.patch('/users/:id', controller.controllerUsers.updateUser)

app.delete('/users/:id', middlewares.jwtValidate, controller.controllerUsers.deleteUser)

app.post('/users/login', middlewares.encryptPass, controller.controllerUsers.loginUser)

app.listen(3000, () => {
  console.log('server running... 🚀')
})