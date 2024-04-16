let client = require('../dbconnection');
let collection = client.db('test').collection('Cats');

function insertCat(cat, callback) {
    collection.insertOne(cat, callback);
}

function getAllCats(callback) {
    collection.find().toArray(callback);
}

module.exports = { insertCat, getAllCats };