const fastify = require('fastify')({ logger: true })
const controller = require('./controller')

fastify.get('/books', controller.controllerBooks.getAllBooks)

fastify.get('/books/:id', controller.controllerBooks.getOneBook)

fastify.post('/books', controller.controllerBooks.createBook)

fastify.patch('/books/:id', controller.controllerBooks.updateBook)

fastify.delete('/books/:id', controller.controllerBooks.deleteBook)

fastify.post('/users', controller.controllerUsers.createUser)

fastify.get('/users', controller.controllerUsers.getAllUsers)

fastify.get('/users/:id', controller.controllerUsers.getOneUser)

fastify.patch('/users/:id', controller.controllerUsers.updateUser)

fastify.delete('/users/:id', controller.controllerUsers.deleteUser)

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})