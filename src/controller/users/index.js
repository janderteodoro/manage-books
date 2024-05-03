module.exports = (service, config) => {
  const getAllUsers = async ( request, reply ) => {
    const execute = await service.getAllUsers()
    reply.send(execute)
  }

  const getOneUser = async ( request, reply ) => {
    const id = request.params.id
    const execute = await service.getOneUser(id)
    reply.send(execute)
  }

  const createUser = async ( request, reply )=> {
    const userData = request.body
    const execute = await service.createUser(userData)
    reply.send(execute)
  }

  const updateUser = async ( request, reply ) => {
    const id = request.params.id
    const newData = request.body
    const execute = await service.updateUser( newData, id )
    reply.send(execute)
  }

  const deleteUser = async ( request, reply ) => {
    const id = request.params.id
    const execute = await service.deleteUser(id)
    reply.send(execute)
  }

  return {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
  }
}