function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
} 

function validateUserName(userName) {
  const userNameSplited = userName.split(' ')
  const isBiggerThan3 = userNameSplited.every(name =>  name.length > 3)
  userName = userName.replace(/\s/g, '') 
  const isOnlyAlfa = /^[a-zA-Z]+$/.test(userName)
  return isBiggerThan3 && isOnlyAlfa
}

function validatePassword(password) {
  if (password.length < 8 || password.length > 23) {
    return false
  }
  if (!/[A-Z]/.test(password)){
    return false
  }
  if (!/[a-z]/.test(password)){
    return false
  }
  if (!/[0-9]/.test(password)){
    return false
  }
  if(!/[\W_]/.test(password)) {
    return false
  }
  return true
}

module.exports = (userData) => {
  const emailIsValid =validateEmail(userData.email) 
  const userNameIsValid = validateUserName(`${userData.userName} ${userData.userSurname}`)
  const passwordIsValid = validatePassword(userData.password)

  if (!emailIsValid) {
    return {
      success: false,
      property: 'email'
    }
  }

  if (!userNameIsValid) {
    return {
      success: false,
      property: 'name or surname'
    }
  }

  if (!passwordIsValid) {
    return {
      success: false,
      property: 'password'
    }
  }

  return {
    sucess: true
  }
}
