'use strict';
module.exports = function (app) {
    var userList = require('../controller/userController');
    var roleList = require('../controller/roleController');
    var shiftList = require('../controller/shiftController');

    // todoList Routes
    app.route('/user')
        .get(userList.list_all_users)
        .post(userList.create_user);

    app.route('/user/:userId')
        .get(userList.get_user_by_id)
        .put(userList.update_user)
        .delete(userList.delete_user);

    app.route('/role')
        .get(roleList.list_all_roles)
        .post(roleList.create_role);

    app.route('/role/:roleId')
        .get(roleList.get_role_by_id)
        .put(roleList.update_role)
        .delete(roleList.delete_role);

    app.route('/shift')
        .get(shiftList.list_all_shift)
        .post(shiftList.create_shift);

    app.route('/shift/:shiftId')
        .get(shiftList.get_shift_by_id)
        .put(shiftList.update_shift)
        .delete(shiftList.delete_shift);
};