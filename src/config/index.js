const { config } = require('dotenv')
const { resolve } = require('path')

const __envfile = resolve(__dirname, '../../.env')

config({path: __envfile})

module.exports = {
  mongoUri: process.env.MONGO_URI,
  dbName: process.env.DB_BOOKS_NAME,
  dbBooksCollection: process.env.DB_BOOKS_COLLECTION,
  dbUserCollection: process.env.DB_USER_COLLECTION,
  jwtSecretKey: process.env.SECRET_KEY_JWT,
  secretSalt: process.env.SECRET_SALT,
}
