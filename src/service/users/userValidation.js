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

  return {
    success: true
  }
}
