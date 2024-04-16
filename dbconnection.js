const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://kooksyyy:Pandapenguin13!@cluster13.aj1wlnp.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

client.connect(err => {
    if (!err) {
        console.log('DB Connected.');
    } else {
        console.error(err);
    }
})

module.exports = client;