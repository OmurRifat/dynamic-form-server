const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');


// formData01
//5jFDZGwpWG6ync0K
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://formData01:5jFDZGwpWG6ync0K@cluster0.qogqlqn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const formData = client.db("formData").collection("sectors");

        app.get('/sectors', async (req, res) => {
            const query = {};
            const sectors = await formData.find(query).toArray();
            res.send(sectors);
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