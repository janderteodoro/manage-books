module.exports = (request, response, next) => {
  try {
    const { password } = request.body
    if( password.lentgh < 8 || password.length > 23) {
      return response.send({
        success: false,
        message: 'password must be between 8 and 23 characters'
      })
    }
    if (!/[A-Z]/.test(password)){
      return response.send({
        success: false,
        message: 'password must be capitalized'
      })
    }
    if (!/[a-z]/.test(password)){
      return response.send({
        success: false,
        message: 'password must have a lower case letter'
      })
    }
    if (!/[0-9]/.test(password)){
      return response.send({
        success: false,
        message: 'password must have a number'
      })
    }
    if(!/[\W_]/.test(password)) {
      return response.send({
        success: false,
        message: 'password must have a special characters'
      })
    }
    next()
  } catch (error) {
    console.error(error)
  }
}