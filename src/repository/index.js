const mongo = require('./db/mongo')

module.exports = {
  insertOneDB: mongo.insertOneMongo,
  deleteOneDB: mongo.deleteOneMongo,
  findOneDB: mongo.findOneMongo,
  findOneFromEmail: mongo.findOneMongoFromEmail,
  updateOneDB: mongo.updateOneMongo,
  listAllDB: mongo.listAllDataMongo,
}