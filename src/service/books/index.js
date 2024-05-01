module.exports = (repository, config) => {
  const getAllBooks = async () => {
    const responseDB = await repository.listAllDB({ db: config.mongoDBName, collection: config.mongoCollection})
    return responseDB
  }

  const getOneBook = async (id) => {
    const responseDB = await repository.findOneDB({ db: config.mongoDBName, collection:config.mongoCollection, _id: id })
    return responseDB
  }

  const createBook = async (bookData) => {
    const responseDB = await repository.insertOneDB({ db: config.mongoDBName, collection: config.mongoCollection, data: bookData })
    return responseDB
  }

  const updateBook = async (newData, id) => {
    const responseDB = await repository.updateOneDB({ db: config.mongoDBName, collection: config.mongoCollection, _id: id, newData })
    return responseDB
  }

  const deleteBook = async (id) => {
    const responseDB = await repository.deleteOneDB({ db: config.mongoDBName, collection: config.mongoCollection, _id: id })
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