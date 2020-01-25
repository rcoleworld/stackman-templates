var express = require('express');
var router = express.Router();

var loginController = require('../controllers/loginController');

router.get('/getAllUsers', loginController.getAllUsers);
router.post('/login', loginController.login);
router.post('/create', loginController.create);
module.exports = router
