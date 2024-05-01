const fastify = require('fastify')({ logger: true })
const controller = require('./controller')

fastify.get('/books', controller.controllerBooks.getAllBooks)

fastify.get('/books/:id', controller.controllerBooks.getOneBook)

fastify.post('/books', controller.controllerBooks.createBook)

fastify.patch('/books/:id', controller.controllerBooks.updateBook)

fastify.delete('/books/:id', controller.controllerBooks.deleteBook)

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})