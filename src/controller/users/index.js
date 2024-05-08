module.exports = (service, config, middlewares) => {
  const getAllUsers = async ( request, response ) => {
    try {
      const execute = await service.getAllUsers()
      return response.send(execute)
    } catch (error) {
      console.error(error)
    }
  }

  const getOneUser = async ( request, response ) => {
    try {
      const id = request.params.id
      const execute = await service.getOneUser(id)
      return response.send(execute)
    } catch (error) {
      console.error(error)
    }
  }

  const createUser = async ( request, response )=> {
    try {
      const userData = request.body
      const execute = await service.createUser(userData)
      return response.send(execute)
    } catch (error) {
      console.error(error)
    }
  }

  const updateUser = async ( request, response ) => {
    try {
      const id = request.params.id
      const newData = request.body
      const execute = await service.updateUser( newData, id )
      return response.send(execute)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteUser = async ( request, response ) => {
    try {
      const id = request.params.id
      const execute = await service.deleteUser(id)
      return response.send(execute)
    } catch (error) {
      console.error(error)
    }
  }

  const loginUser = async (request, response ) => {
    try {
      const loginUserData = request.body
      const execute = await service.loginUser(loginUserData)
      return response.send(execute)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
  }
}