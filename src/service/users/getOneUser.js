module.exports = async ({ repository, config, id }) => {
  const responseDB = await repository.findOneDB({
    db: config.dbName, collection: config.dbUserCollection, _id: id
  })

  return responseDB
}