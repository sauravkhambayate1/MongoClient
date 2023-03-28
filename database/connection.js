const {MongoClient} = require('mongodb')

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url)

const insertToDB = async(data)=>{
    const database = client.db("inventory")
    const collection = database.collection("items")
    // console.log(collection)
   await client.connect();
  const dbResponse=await collection.insertOne(data)
//   console.log("this is", dbResponse)
   await client.close()
   return dbResponse
}
const findInDB = async(query)=>{
    const database = client.db('inventory')
    const collection = database.collection('items')
    await client.connect();
    const dbResponse = await collection.find(query).toArray()
    await client.close()
    return dbResponse
}

const updateInDB=async(filter,value)=>{
    await client.connect();
    const database=client.db("inventory")
    const collection=database.collection("items");
    const dbResponse=await collection.updateMany(filter,value)
    await client.close();
    return dbResponse;
}
const deleteInDB=async(data)=>{
    await client.connect();
    const database=client.db("inventory")
    const collection=database.collection("items");
    const dbResponse=await collection.deleteOne(data)
    await client.close();
    return dbResponse;
}

module.exports = {
    insertToDB, findInDB, updateInDB, deleteInDB
}