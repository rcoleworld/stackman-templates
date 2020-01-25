const User = require("../models/loginModel");
const mongoose = require('mongoose');

const mongoDB = 'mongodb://mongo:27017'

mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// function to create a user with an email and a login
exports.create = function (req, res, next) {
    User.find({email: req.body.email}, function(err, users) {
      if (err) {
        throw err;
      }
      else {
        if(users.length == 0) {

          var newUser = new User({password: req.body.password, email: req.body.email});
          console.log(newUser);
          newUser.save(function (err) {
            if (err)
            throw err;
            res.json({
              message: 'User created'
            });
          });
        } else {
          console.log(users)
          res.json({
            message: 'User already in database'
          });
        }
      }
    });
}

exports.login = function(req, res, next) {

}

// gets all of the users in the database
exports.getAllUsers = function(req, res, next) {
    User.find({}, function(err, users) {
        if(err) {
          return next(err);
        }
        res.json(users);
    });
}