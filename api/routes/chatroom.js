var express = require('express');
var router = express.Router();

var chatroomController = require('../controllers/chatroomController');

router.get('/', chatroomController.hello);

module.exports = router;