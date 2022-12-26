const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

app.use(cors());
app.use(express.json());


// Replace the uri string with your MongoDB deployment's connection string.
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qogqlqn.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const formData = client.db("formData").collection("sectors");
        const formInfo = client.db("formData").collection("formInfo");
        //api for loading data from the database
        app.get('/sectors', async (req, res) => {
            const query = {};
            const sectors = await formData.find(query).toArray();
            res.send(sectors);
        })

        //api for storing data to db
        app.post('/store-info', async (req, res) => {
            const data = req.body;
            const sentData = await formInfo.insertOne(data);
            res.send(sentData)
        })

    }
    finally {

    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("Server is runing.");
})

app.listen(port, () => {
    console.log("Listening from port: ", port)
})