'use strict';

var Role = require('../model/roleModel.js');

exports.list_all_roles = function (req, res) {
  Role.getAllrole(function (err, role) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', role);
    res.send(role);
  });
};

exports.create_role = function (req, res) {
  var new_role = new Role(req.body);

  //handles null error 
  if (!new_role.role_name) {
    res.status(400).send({
      error: true,
      message: 'Please provide role_name'
    });
  } else {
    Role.createRole(new_role, function (err, role) {
      if (err)
        res.send(err);
      res.json({role,message: 'Role successfully created'});
    });
  }
};

exports.get_role_by_id = function (req, res) {
  Role.getRoleById(req.params.roleId, function (err, role) {
    if (err)
      res.send(err);
    res.json({role,message: 'Role has been found'});
  });
};

exports.update_role = function (req, res) {
  Role.updateById(req.params.roleId, new Role(req.body), function (err, role) {
    if (err)
      res.send(err);
    res.json({role,message: 'Role has been updated'});
  });
};

exports.delete_role = function (req, res) {
  Role.remove(req.params.roleId, function (err, role) {
    if (err)
      res.send(err);
    res.json({
      message: 'Role successfully deleted'
    });
  });
};