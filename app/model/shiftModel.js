'user strict';
var sql = require('./db.js');

//Task object constructor
var Shift = function (shift) {
    this.id_user = shift.id_user;
    this.shift_date = shift.shift_date;
    this.work_start = shift.work_start;
    this.work_end = shift.work_end;
    this.created_date = new Date();
};
Shift.createShift = function createShift(newShift, result) {
    sql.query("INSERT INTO shift set ?", newShift, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null,res);
        }
    });
};

Shift.getShiftById = function getShiftById(shiftId, result) {
    sql.query("Select * from shift where id_shift = ? ", shiftId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Shift.getAllShift = function getAllShift(result) {
    sql.query("Select * from shift", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('tasks : ', res);
            result(null, res);
        }
    });
};

Shift.updateById = function (id, shift, result) {
    sql.query("UPDATE shift SET id_user = ? , shift_date = ? , work_start = ? , work_end = ? WHERE id_shift = ?", [shift.id_user,shift.shift_date,shift.work_start,shift.work_end, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Shift.remove = function (id, result) {
    sql.query("DELETE FROM shift WHERE id_shift = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Shift;