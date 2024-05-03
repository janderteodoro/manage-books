module.exports = (repository, config) => {
  const getAllBooks = async () => {
    const responseDB = await repository.listAllDB({ db: config.dbName, collection: config.dbBooksCollection})
    return responseDB
  }

  const getOneBook = async (id) => {
    const responseDB = await repository.findOneDB({ db: config.dbName, collection:config.dbBooksCollection, _id: id })
    return responseDB
  }

  const createBook = async (bookData) => {
    const responseDB = await repository.insertOneDB({ db: config.dbName, collection: config.dbBooksCollection, data: bookData })
    return responseDB
  }

  const updateBook = async (newData, id) => {
    const responseDB = await repository.updateOneDB({ db: config.dbName, collection: config.dbBooksCollection, _id: id, newData })
    return responseDB
  }

  const deleteBook = async (id) => {
    const responseDB = await repository.deleteOneDB({ db: config.dbName, collection: config.dbBooksCollection, _id: id })
    return responseDB
  }

  return {
    getAllBooks,
    getOneBook,
    createBook,
    updateBook,
    deleteBook
  }
}