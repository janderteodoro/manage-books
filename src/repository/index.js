const mongo = require('./db/mongo')

module.exports = {
  insertOneDB: mongo.insertOneMongo,
  deleteOneDB: mongo.deleteOneMongo,
  findOneDB: mongo.findOneMongo,
  updateOneDB: mongo.updateOneMongo,
  listAllDB: mongo.listAllDataMongo,
}