const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = (request, response, next) => {
  const token = request.headers['authorization']
  
  if (!token) {
    return response.send({
      success: false,
      message: 'Not authorized' 
    })
  }

  jwt.verify(token, config.jwtSecretKey, (err, decoded) => {
    if (err) {
      response.send({
        success: false,
        message: 'Not authorized' 
      })
    }

    request.user = decoded
    next()
  })
}