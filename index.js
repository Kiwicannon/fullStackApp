const express = require('express'), 
    bodyParser = require('body-parser'),
    massive = require('massive');


const app = module.exports = express();

app.use(bodyParser.json())
app.use(express.static('./public'))

















