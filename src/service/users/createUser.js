module.exports = async ({ repository, config, userData, userValidation }) => {
  userValidation(userData)
  const responseDB = await repository.insertOneDB({
    db: config.dbName,
    collection: config.dbUserCollection,
    data: userData
  })
  return responseDB
}