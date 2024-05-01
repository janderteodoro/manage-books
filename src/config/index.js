const { config } = require('dotenv')
const { resolve } = require('path')

const __envfile = resolve(__dirname, '../../.env')

config({path: __envfile})

module.exports = {
    mongoUri: process.env.MONGO_URI,
    mongoDBName: process.env.MONGO_DBNAME,
    mongoCollection: process.env.MONGO_COLLECTION
}
