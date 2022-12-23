const express = require('express');
const app = express();
const port = process.env.PORT || 5000;



app.get('/', (req, res) => {
    res.send("Server is runing.");
})

app.listen(port, () => {
    console.log("Listening from port: ", port)
})