'user strict';
var sql = require('./db.js');

//Task object constructor
var Role = function (role) {
    this.role_name = role.role_name;
    this.created_date = new Date();
};
Role.createRole = function createRole(newRole, result) {
    sql.query("INSERT INTO role set ?", newRole, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null,res);
        }
    });
};

Role.getRoleById = function getRoleById(roleId, result) {
    sql.query("Select * from role where id_role = ? ", roleId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Role.getAllrole = function getAllrole(result) {
    sql.query("Select * from role", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('tasks : ', res);
            result(null, res);
        }
    });
};

Role.updateById = function (id, role, result) {
    sql.query("UPDATE role SET role_name = ? WHERE id_role = ?", [role.role_name, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Role.remove = function (id, result) {
    sql.query("DELETE FROM role WHERE id_role = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Role;