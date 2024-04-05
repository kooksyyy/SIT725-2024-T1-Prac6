let express = require('express');
let app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kooksyyy:Pandapenguin13!@cluster13.aj1wlnp.mongodb.net/?retryWrites=true&w=majority";
let port = process.env.port || 3000;
let collection;

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.get('/', function (req, res) {
    res.render('public/index.html');
});

app.get('/api/cats', (req, res) => {
    if (collection) {
        getAllCats((err, result) => {
            if (!err) {
                res.json({ statusCode: 200, data: result, message: 'get all cats successful' });
            }
        });
    } else {
        res.status(500).json({ statusCode: 500, message: 'Internal Server Error: Database not initialized' });
    }
});

app.post('/api/cat', (req, res) => {
    if (collection) {
        let cat = req.body;
        postCat(cat, (err, result) => {
            if (!err) {
                res.json({ statusCode: 201, data: result, message: 'success' });
            }
        });
    } else {
        res.status(500).json({ statusCode: 500, message: 'Internal Server Error: Database not initialized' });
    }
});


function postCat(cat, callback) {
  collection.insertOne(cat, (err, result) => {
    if (err) {
      console.error(err);
      callback(err, null); 
    } else {
      callback(null, result); 
    }
  });
}

function getAllCats(callback) {
  collection.find({}).toArray((err, result) => {
    if (err) {
      console.error(err);
      callback(err, null); 
    } else {
      callback(null, result); 
    }
  });
}

async function runDBConnection() {
  try {
      await client.connect();
      collection = client.db().collection('Cat');
      console.log(collection);
  } catch (ex) {
      console.error(ex);
  }
}

app.listen(port, () => {
    console.log('express server started');
    runDBConnection();
});