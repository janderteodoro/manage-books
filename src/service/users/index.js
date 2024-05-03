const userValidation = require('./userValidation')

module.exports = ( repository, config ) => {
  const getAllUsers = async () => {
    const responseDB = await repository.listAllDB({
      db: config.dbName, collection: config.dbUserCollection
    })
    return responseDB;
  }

  const getOneUser = async (id) => {
    const responseDB = await repository.findOneDB({
      db: config.dbName, collection: config.dbUserCollection, _id: id
    })
    return responseDB
  }

  const createUser = async (userData) => {
    const isValidUser = userValidation(userData)
    if (!isValidUser.sucess) {
      return {
        success: false,
        message: `This data is wrong: ${isValidUser.property}`
      }
    }
    const responseDB = await repository.insertOneDB({
      db: config.dbName, collection: config.dbUserCollection, data: userData
    })
    return responseDB
  }

  const updateUser = async (newData, id) => {
    const responseDB = await repository.updateOneDB({
      db: config.dbName, collection: config.dbUserCollection, _id: id, newData
    })
    return responseDB
  }

  const deleteUser = async (id) => {
    const responseDB = await repository.deleteOneDB({
      db: config.dbName, collection: config.dbUserCollection, _id: id
    })
    return responseDB
  }

  return {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
  }
}
