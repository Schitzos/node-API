'user strict';
var sql = require('./db.js');

//Task object constructor
var User = function (user) {
    this.username = user.username;
    this.id_role = user.id_role;
    this.created_date = new Date();
};
User.createUser = function createUser(newUser, result) {
    sql.query("INSERT INTO user set ?", newUser, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null,res);
        }
    });
};

User.getUserById = function getUserById(userId, result) {
    sql.query("Select * from user where id_user = ? ", userId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

User.getAllUser = function getAllUser(result) {
    sql.query("Select * from user", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('tasks : ', res);
            result(null, res);
        }
    });
};

User.updateById = function (id, user, result) {
    sql.query("UPDATE user SET username = ? WHERE id_user = ?", [user.username, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

User.remove = function (id, result) {
    sql.query("DELETE FROM user WHERE id_user = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = User;