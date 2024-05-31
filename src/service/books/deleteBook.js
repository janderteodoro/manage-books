module.exports = async ({
  id, repository, config
}) => {
  const responseDB = await repository.deleteOneDB({
    db: config.dbName, collection: config.dbBooksCollection, _id: id
  })
  return responseDB
}