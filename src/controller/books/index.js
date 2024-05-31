module.exports = ({
  booksService, bookSchema, config, repository,
}) => {
  const getAllBooks = async ( request, response ) => {
    try {
      const execute = await booksService.getAllBooks({
        repository, config
      })
      return response.status(200).json(execute)
    } catch (error) {
      return response.status(error.status || 500).json({ error })
    }
  }

  const getOneBook = async ( request, response ) => {
    try {
      const id = request.params.id
      const execute = await booksService.getOneBook({
        config, repository, id
      })
      return response.status(200).json(execute)
    } catch (error) {
      return response.status(error.status || 500).json({ error })
    } 
  }

  const createBook = async ( request, response ) => {
    try {
      const bookData = request.body
      const { error } = bookSchema.create.validate(bookData)

      if (error) {
        return response.status(400).json({ error: error?.details[0]?.message })
      }

      const execute = await booksService.createBook({
        bookData, repository, config
      })

      return response.status(201).json(execute)
    } catch (error) {
      return response.status(error.status || 500).json({ error })
    }
  }

  const updateBook = async ( request, response ) => {
    try {
      const id = request.params.id
      const newData = request.body
      const { error } = bookSchema.update.validate(newData)

      if (error) {
        return response.status(400).json({ error: error?.details[0]?.message })
      }
      
      const execute = await booksService.updateBook({
        newData, id, repository, config
      })

      return response.status(204).json(execute)
    } catch (error) {
      return response.status(error.status || 500).json({ error })
    }
  }

  const deleteBook = async ( request, response ) => {
    try {
      const id = request.params.id
      const execute = await booksService.deleteBook({
        id, repository, config
      })
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