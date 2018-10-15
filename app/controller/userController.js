'use strict';

var User = require('../model/userModel.js');

exports.list_all_users = function (req, res) {
  User.getAllUser(function (err, user) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', user);
    res.send(user);
  });
};

exports.create_user = function (req, res) {
  var new_user = new User(req.body);

  //handles null error 
  if (!new_user.username || !new_user.id_role) {
    res.status(400).send({
      error: true,
      message: 'Please provide username-idrole'
    });
  } else {
    User.createUser(new_user, function (err, user) {
      if (err)
        res.send(err);
      res.json({user,message: 'User successfully created'});
    });
  }
};

exports.get_user_by_id = function (req, res) {
  User.getUserById(req.params.userId, function (err, user) {
    if (err)
      res.send(err);
    res.json({user,message: 'User has been found'});
  });
};

exports.update_user = function (req, res) {
  User.updateById(req.params.userId, new User(req.body), function (err, user) {
    if (err)
      res.send(err);
    res.json({user,message: 'User has been updated'});
  });
};

exports.delete_user = function (req, res) {
  User.remove(req.params.userId, function (err, user) {
    if (err)
      res.send(err);
    res.json({
      message: 'User successfully deleted'
    });
  });
};