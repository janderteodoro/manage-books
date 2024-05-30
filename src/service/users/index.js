const getAllUsers = require('./getAllUsers')
const getOneUser = require('./getOneUser')
const createUser = require('./createUser')

module.exports = {
  getAllUsers,
  getOneUser,
  createUser
}

// const userValidation = require('./userValidation')

// module.exports = ( repository, config, utils ) => {
//   const getAllUsers = async () => {
//     const responseDB = await repository.listAllDB({
//       db: config.dbName, collection: config.dbUserCollection
//     })
//     return responseDB;
//   }

//   const getOneUser = async (id) => {
//     const responseDB = await repository.findOneDB({
//       db: config.dbName, collection: config.dbUserCollection, _id: id
//     })
//     return responseDB
//   }

//   const createUser = async (userData) => {
//     userValidation(userData)
//     const responseDB = await repository.insertOneDB({
//       db: config.dbName, collection: config.dbUserCollection, data: userData
//     })
//     return responseDB
//   }

//   const updateUser = async (newData, id) => {
//     const responseDB = await repository.updateOneDB({
//       db: config.dbName, collection: config.dbUserCollection, _id: id, newData
//     })
//     return responseDB
//   }

//   const deleteUser = async (id) => {
//     const responseDB = await repository.deleteOneDB({
//       db: config.dbName, collection: config.dbUserCollection, _id: id
//     })
//     return responseDB
//   }

//   const loginUser = async (loginUserData) => {
//     const isUserExists  = await repository.findOneFromEmail({
//       db: config.dbName, collection: config.dbUserCollection, email: loginUserData.email
//     })

//     if (!isUserExists) {
//       throw {
//         message: 'User not exists',
//         status: 401
//       }
//     }

//     if (isUserExists.password != loginUserData.password) {
//       throw {
//         message: 'incorrect password',
//         status: 401,
//       }
//     }

//     const tokenOptions = {
//       expiresIn: '1h'
//     }

//     const token = utils.jwtUtils.createToken({ 
//       userData: loginUserData,
//       jwtSecretKey: config.jwtSecretKey,
//       tokenOptions,
//     })

//     return {
//       token,
//       userData: isUserExists,
//     }
//   }

//   return {
//     getAllUsers,
//     getOneUser,
//     createUser,
//     updateUser,
//     deleteUser,
//     loginUser
//   }
// }
