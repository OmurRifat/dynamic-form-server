const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
import { MongoClient } from "mongodb";


// formData01
//5jFDZGwpWG6ync0K
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "<connection string uri>";
const client = new MongoClient(uri);

async function run() {
    try {
        const formData = client.db("formData").collection("services");

        app.get('/services', async (req, res) => {
            const query = {};
            const services = await formData.find(query).toArray();
            res.send(services);
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