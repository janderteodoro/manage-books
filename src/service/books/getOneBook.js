module.exports = async ({
  config, repository, id
}) => {
  const responseDB = await repository.findOneDB({
    db: config.dbName, collection: config.dbBooksCollection, _id: id 
  })
  return responseDB
}