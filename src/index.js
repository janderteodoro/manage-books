const fastify = require('fastify')({ logger: true })
const { 
  insertOneMongo, 
  listAllDataMongo,
  findOneMongo,
  updateOneMongo,
  deleteOneMongo,
} = require('./repository/db/mongo')

fastify.get('/books', async function handler (request, reply) {
  const responseMongo = await listAllDataMongo({ db: 'manage-books', collection: 'books'})
  reply.send(responseMongo)
})

fastify.get('/books/:id', async function handler (request, reply) {
  const responseMongo = await findOneMongo({ db: 'manage-books', collection: 'books', _id: request.params.id})
  reply.send(responseMongo)
})

fastify.post('/books', async function handler (request, reply) {
  const responseMongo = await insertOneMongo({ db: 'manage-books', collection: 'books', data: request.body})
  reply.send(responseMongo)
})

fastify.patch('/books/:id', async function handler (request, reply) {
  
  const data = request.body
  // PAREI AQUI const
  const responseMongo = await updateOneMongo({ 
    db: 'manage-books', 
    collection: 'books', 
    _id: request.params.id,
    newData: data
  })

  reply.send(responseMongo)
})

fastify.delete('/books/:id', async function handler (request, reply) {
  const responseMongo = await deleteOneMongo({ 
    db: 'manage-books', 
    collection: 'books',
    _id: request.params.id, 
  })

  reply.send(responseMongo)
})

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})