module.exports = async ({
  repository, config
}) => {
  const responseDB = await repository.listAllDB({
    db: config.dbName, collection: config.dbBooksCollection
  })
  return responseDB
}