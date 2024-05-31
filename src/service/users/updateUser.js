module.exports = async ({ repository, config, newData, id }) => {
  const reponseDB = await repository.updateOneDB({
    db: config.dbName, 
    collection: config.dbUserCollection, 
    _id: id, 
    newData
  })
  return reponseDB
}