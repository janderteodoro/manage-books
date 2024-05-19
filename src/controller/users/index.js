module.exports = (service, config, middlewares) => {
  const getAllUsers = async ( request, response ) => {
    try {
      const execute = await service.getAllUsers()
      return response.status(200).json(execute)
    } catch (error) {
      return response.status(error.status || 500).json({ error })
    }
  }

  const getOneUser = async ( request, response ) => {
    try {
      const id = request.params.id
      const execute = await service.getOneUser(id)
      return response.status(200).json(execute)
    } catch (error) {
      return response.status(error.status || 500).json({ error })
    }
  }

  const createUser = async ( request, response )=> {
    try {
      const userData = request.body
      const execute = await service.createUser(userData)
      return response.status(201).json(execute)
    } catch (error) {
      return response.status(error.status || 500).json({ error })
    }
  }

  const updateUser = async ( request, response ) => {
    try {
      const id = request.params.id
      const newData = request.body
      const execute = await service.updateUser( newData, id )
      return response.status(204).json(execute)
    } catch (error) {
      return response.status(error.status || 500).json({ error })
    }
  }

  const deleteUser = async ( request, response ) => {
    try {
      const id = request.params.id
      const execute = await service.deleteUser(id)
      return response.status(204).json(execute)
    } catch (error) {
      return response.status(error.status || 500).json({ error })
    }
  }

  const loginUser = async (request, response ) => {
    try {
      const loginUserData = request.body
      const execute = await service.loginUser(loginUserData)
      return response.status(200).json(execute)
    } catch (error) {
      return response.status(error.status || 500).json({ error })
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