var express = require('express');
var router = express.Router();

var chatroomController = require('../controllers/testController');

router.get('/', testController.hello);

module.exports = router;