module.exports = (service, config, middlewares) => {
  const getAllUsers = async ( request, response ) => {
    const execute = await service.getAllUsers()
    return response.send(execute)
  }

  const getOneUser = async ( request, response ) => {
    const id = request.params.id
    const execute = await service.getOneUser(id)
    return response.send(execute)
  }

  const createUser = async ( request, response )=> {
    const userData = request.body
    const execute = await service.createUser(userData)
    return response.send(execute)
  }

  const updateUser = async ( request, response ) => {
    const id = request.params.id
    const newData = request.body
    const execute = await service.updateUser( newData, id )
    return response.send(execute)
  }

  const deleteUser = async ( request, response ) => {
    const id = request.params.id
    const execute = await service.deleteUser(id)
    return response.send(execute)
  }

  const loginUser = async (request, response ) => {
    const loginUserData = request.body
    const execute = await service.loginUser(loginUserData)
    return response.send(execute)
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