module.exports = (service, config) => {
  const getAllBooks = async ( request, response ) => {
    try {
      const execute = await service.getAllBooks()
      return response.status(200).json(execute)
    } catch (error) {
      return response.status(error.status || 500).json({ error })
    }
  }

  const getOneBook = async ( request, response ) => {
    try {
      const id = request.params.id
      const execute = await service.getOneBook(id)
      return response.status(200).json(execute)
    } catch (error) {
      return response.status(error.status || 500).json({ error })
    } 
  }

  const createBook = async ( request, response ) => {
    try {
      const bookData = request.body
      const execute = await service.createBook(bookData)
      return response.status(201).json(execute)
    } catch (error) {
      return response.status(error.status || 500).json({ error })
    }
  }

  const updateBook = async ( request, response ) => {
    try {
      const id = request.params.id
      const newData = request.body
      const execute = await service.updateBook(newData, id)
      return response.status(204).json(execute)
    } catch (error) {
      return response.status(error.status || 500).json({ error })
    }
  }

  const deleteBook = async ( request, response ) => {
    try {
      const id = request.params.id
      const execute = await service.deleteBook(id)
      return response.status(204).json(execute)
    } catch (error) {
      return response.status(error.status || 500).json({ error })
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