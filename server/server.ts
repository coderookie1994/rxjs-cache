const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const app = express();

app.use(bodyParser.json());

app.get('/rights', (req, res) => {
    console.log(req.query)
    res.header("Access-Control-Allow-Origin", "*");
    res.json({
        value: true
    })
})

const port = process.env.PORT || '4201';
app.set('port', 4201);

const server = http.createServer(app);

server.listen(port, () => console.log("Running server"));