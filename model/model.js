let client = require('../dbconnection');
let collection = client.db('test').collection('cats');

function insertCat(cat, callback){
    collection.insertOne(cat, callback);
 }
 
 function getAllCats(callback) {
    collection.find().toArray(callback);
 }

 const remove = (cat, callback) => {
   collection.deleteOne(cat,callback);
 }
 
module.exports = {insertCat,getAllCats,remove}