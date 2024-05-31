module.exports = async ({
  repository, config, loginUserData, utils
}) => {
  const isUserExists = await repository.findOneFromEmail({
    db: config.dbName, collection: config.dbUserCollection, email: loginUserData.email
  })

  if (!isUserExists) {
    throw {
      message: 'User not exists',
      status: 401
    }
  }

  if (isUserExists.password != loginUserData.password) {
    throw {
      message: 'Incorrect password',
      status: 401
    }
  }

  const tokenOptions = {
    expiresIn: '1h'
  }

  const token = utils.jwtUtils.createToken({
    userData: loginUserData,
    jwtSecretKey: config.jwtSecretKey,
    tokenOptions
  })

  return {
    token,
    userData: isUserExists
  }
}