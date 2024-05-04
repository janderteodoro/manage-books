module.exports = (service, config) => {
  const getAllBooks = async ( request, response ) => {
    const execute = await service.getAllBooks()
    return response.send(execute)
  }

  const getOneBook = async ( request, response ) => {
    const id = request.params.id
    const execute = await service.getOneBook(id)
    return response.send(execute)
  }

  const createBook = async ( request, response ) => {
    const bookData = request.body
    const execute = await service.createBook(bookData)
    return response.send(execute)
  }

  const updateBook = async ( request, response ) => {
    const id = request.params.id
    const newData = request.body
    const execute = await service.updateBook(newData, id)
    return response.send(execute)
  }

  const deleteBook = async ( request, response ) => {
    const id = request.params.id
    const execute = await service.deleteBook(id)
    return response.send(execute)
  }
    
  return  {
    getAllBooks,
    getOneBook,
    createBook,
    updateBook,
    deleteBook
  }
}