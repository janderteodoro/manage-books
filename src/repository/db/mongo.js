const { mongoUri }  = require('../../config')
const { MongoClient, ObjectId } = require('mongodb')
const { v4: uuidV4 } = require('uuid')

const client = new MongoClient(mongoUri)

async function insertOneMongo({ db, collection, data }){
    try {
        await client.connect()
        const response = await client.db(db).collection(collection).insertOne({ _id: uuidV4(), ...data})
        return response
    } catch(error) {
        throw new Error(error)
    } finally {
        client.close()
    }
}

async function deleteOneMongo({ db, collection, _id }) {
    try {
        await client.connect()
        const response = await client.db(db).collection(collection).deleteOne({'_id': _id})
        return response
    } catch(error) {
        throw new Error(error)
    } finally {
        client.close()
    }
}

async function findOneMongo({ db, collection, _id}) {
    try {
        await client.connect()
        const response = await client.db(db).collection(collection).findOne({ '_id': _id })
        return response 
    } catch(error) {
        throw new Error(error)
    } finally {
        client.close()

    }
}

async function updateOneMongo({ db, collection, _id, newData }) {
    try {
        await client.connect()
        const response = await client.db(db).collection(collection).updateOne({ '_id': _id }, { $set: newData })
        return response
    } catch(error) {
        throw new Error(error)
    } finally {
        client.close()
    }
}

async function listAllDataMongo({ db, collection }) {
    try {
        await client.connect()
        const response = await client.db(db).collection(collection).find().toArray()
        return response
    } catch (error) {
        throw new Error(error)
    } finally {
        client.close()
    }
}


module.exports = {
    insertOneMongo,
    deleteOneMongo,
    findOneMongo,
    updateOneMongo,
    listAllDataMongo,
}