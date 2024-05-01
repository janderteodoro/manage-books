module.exports = (service, config) => {
  const getAllBooks = async ( request, reply ) => {
    const execute = await service.getAllBooks()
    reply.send(execute)
  }

  const getOneBook = async ( request, reply ) => {
    const id = request.params.id
    const execute = await service.getOneBook(id)
    reply.send(execute)
  }

  const createBook = async ( request, reply ) => {
    const bookData = request.body
    const execute = await service.createBook(bookData)
    reply.send(execute)
  }

  const updateBook = async ( request, reply ) => {
    const id = request.params.id
    const newData = request.body
    const execute = await service.updateBook(newData, id)
    reply.send(execute)
  }

  const deleteBook = async ( request, reply ) => {
    const id = request.params.id
    const execute = await service.deleteBook(id)
    reply.send(execute)
  }
    
  return  {
    getAllBooks,
    getOneBook,
    createBook,
    updateBook,
    deleteBook
  }
}