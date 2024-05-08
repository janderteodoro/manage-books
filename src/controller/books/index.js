module.exports = (service, config) => {
  const getAllBooks = async ( request, response ) => {
    try {
      const execute = await service.getAllBooks()
      return response.send(execute)
    } catch (error) {
      console.error(error)
    }
  }

  const getOneBook = async ( request, response ) => {
    try {
      const id = request.params.id
      const execute = await service.getOneBook(id)
      return response.send(execute)
    } catch (error) {
      console.error(error)
    } 
  }

  const createBook = async ( request, response ) => {
    try {
      const bookData = request.body
      const execute = await service.createBook(bookData)
      return response.send(execute)
    } catch (error) {
      console.error(error)
    }
  }

  const updateBook = async ( request, response ) => {
    try {
      const id = request.params.id
      const newData = request.body
      const execute = await service.updateBook(newData, id)
      return response.send(execute)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteBook = async ( request, response ) => {
    try {
      const id = request.params.id
      const execute = await service.deleteBook(id)
      return response.send(execute)
    } catch (error) {
      console.error(error)
    }
  }
    
  return  {
    getAllBooks,
    getOneBook,
    createBook,
    updateBook,
    deleteBook
  }
}