var User = require("../models/loginModel");
var mongoDB = 'mongodb://mongo:27017'

var mongoose = require('mongoose');
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
exports.create = function (req, res, next) {
    var newUser = new User({password: req.body.password, email: req.body.email});
    console.log(newUser);
    newUser.save(function (err) {
        if (err)
          throw err;
        res.json({
          message: 'User created'
        });
        // res.send(newUser)
    });
}

exports.login = function(req, res, next) {
    User.find({}, function(err, users) {
        if(err) return next(err);
        res.json(users);
    });
}