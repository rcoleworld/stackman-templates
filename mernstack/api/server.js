const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8081;
const HOST = '0.0.0.0';

var app = express();

var testRouter = require('./routes/test');
var loginRouter = require('./routes/login');

app.use(bodyParser.json())

app.use('/test', testRouter);
app.use('/login', loginRouter);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
