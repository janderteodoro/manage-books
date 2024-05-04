const userValidation = require('./userValidation')

module.exports = ( repository, config, utils ) => {
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

  const loginUser = async (loginUserData) => {
    const isUserExists  = await repository.findOneFromEmail({
      db: config.dbName, collection: config.dbUserCollection, email: loginUserData.email
    })

    if (!isUserExists) {
      return {
        success: false,
        message: 'User not exists'
      }
    }

    const tokenOptions = {
      expiresIn: '1h'
    }

    const token = utils.jwtUtils.createToken({ 
      userData: loginUserData,
      jwtSecretKey: config.jwtSecretKey,
      tokenOptions,
    })

    return {
      token,
      userData: isUserExists,
    }
  }

  return {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser
  }
}
