const { mongoUri }  = require('../../config')
const { MongoClient } = require('mongodb')
const { v4: uuidV4 } = require('uuid')

async function withMongoClient(callback) {
  const client = new MongoClient(mongoUri)
  try {
    await client.connect()
    return await callback(client)
  } catch (error) {
    console.log('error on mongo conexion')
  } finally {
    await client.close()
  }
}

async function insertOneMongo({ db, collection, data }){
  return await withMongoClient(async (client) => {
    return await client.db(db).collection(collection).insertOne({ _id: uuidV4(), ...data})
  })
}

async function deleteOneMongo({ db, collection, _id }) {
  return await withMongoClient(async (client) => {
    return await client.db(db).collection(collection).deleteOne({'_id': _id})
  })
}

async function findOneMongo({ db, collection, _id}) {
  return await withMongoClient(async (client) => {
    return await client.db(db).collection(collection).findOne({ '_id': _id })
  })
}

async function findOneMongoFromEmail({ db, collection, email }) {
  return withMongoClient(async (client) => {
    return await client.db(db).collection(collection).findOne({ email })
  }) 
}

async function updateOneMongo({ db, collection, _id, newData }) {
  return await withMongoClient(async (client) => {
    return await client.db(db).collection(collection).updateOne({ '_id': _id }, { $set: newData })
  })  
}

async function listAllDataMongo({ db, collection }) {
  return await withMongoClient(async (client) => {
    return await client.db(db).collection(collection).find().toArray()
  })
}


module.exports = {
  insertOneMongo,
  deleteOneMongo,
  findOneMongo,
  findOneMongoFromEmail,
  updateOneMongo,
  listAllDataMongo,
}