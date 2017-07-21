const express = require('express');
const bodyParser = require('body-parser');
const yelp = require('yelp-fusion');

const router = require('./router');
// var { mongoose } = require('./db/mongoose')

var app = express();
const port = process.env.PORT || 3090;

app.use(bodyParser.json());

router(app);

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});