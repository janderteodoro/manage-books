const jwt = require('jsonwebtoken');

const createToken = ({ userData, jwtSecretKey, tokenOptions }) => {
  const token = jwt.sign(userData, jwtSecretKey, tokenOptions)
  return token
}

module.exports = {
  createToken
}
