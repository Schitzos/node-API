'use strict';

var Shift = require('../model/shiftModel.js');

exports.list_all_shift = function (req, res) {
    Shift.getAllShift(function (err, shift) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', shift);
    res.send(shift);
  });
};

exports.create_shift = function (req, res) {
  var new_shift = new Shift(req.body);

  //handles null error 
  if (!new_shift.id_user || !new_shift.shift_date || !new_shift.work_start || !new_shift.work_end) {
    res.status(400).send({
      error: true,
      message: 'Please provide id_user - shift date (yyyy-mm-dd) - work start yyyy-mm-dd HH:II:SS - work end yyyy-mm-dd HH:II:SS'
    });
  } else {
    Shift.createShift(new_shift, function (err, shift) {
      if (err)
        res.send(err);
      res.json({shift,message: 'Shift successfully created'});
    });
  }
};

exports.get_shift_by_id = function (req, res) {
    Shift.getShiftById(req.params.shiftId, function (err, shift) {
    if (err)
      res.send(err);
    res.json({shift,message: 'Shift has been found'});
  });
};

exports.update_shift = function (req, res) {
    Shift.updateById(req.params.shiftId, new Shift(req.body), function (err, shift) {
    if (err)
      res.send(err);
    res.json({shift,message: 'Shift has been updated'});
  });
};

exports.delete_shift = function (req, res) {
    Shift.remove(req.params.shiftId, function (err, shift) {
    if (err)
      res.send(err);
    res.json({
      message: 'Shift successfully deleted'
    });
  });
};