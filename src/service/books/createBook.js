const bookValidation = require('./validations/bookValidation')

module.exports = async ({
  bookData, repository, config
}) => {
  bookValidation(bookData)
  const responseDB = await repository.insertOneDB({
    db: config.dbName, collection: config.dbBooksCollection, data: bookData 
  })
  return responseDB
}