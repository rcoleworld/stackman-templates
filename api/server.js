const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8081;
const HOST = '0.0.0.0';

var app = express();

var chatroomRouter = require('./routes/chatroom');
var loginRouter = require('./routes/login');

app.use(bodyParser.json())

app.use('/chatroom', chatroomRouter);
app.use('/login', loginRouter);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
