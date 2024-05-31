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

module.exports = (userData) => {
  const emailIsValid =validateEmail(userData.email) 
  const userNameIsValid = validateUserName(`${userData.userName} ${userData.userSurname}`)

  if (!emailIsValid) {
    throw {
      status: 400,
      message: 'emai is not valid'
    }
  }

  if (!userNameIsValid) {
    throw {
      status: 400,
      message: 'user name is not valid'
    }
  }

  return true
}
