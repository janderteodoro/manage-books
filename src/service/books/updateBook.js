module.exports = async ({
  newData, id, repository, config
}) => {
  const responseDB = await repository.updateOneDB({
    db: config.dbName, collection: config.dbBooksCollection, _id: id, newData 
  })
  return responseDB
}