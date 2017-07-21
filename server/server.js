const express = require('express');
const bodyParser = require('body-parser');

const router = require('./router');

var app = express();
const port = process.env.PORT || 3090;

app.use(bodyParser.json());

router(app);

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});