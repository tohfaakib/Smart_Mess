var db = require('./db');

module.exports = {

    getAllUsersExpensesByMessId: function (data, callback) {

        var sql = "select * from users, expenses where user.mess_id = expenses.mess_id and user.mess_id=?";
        db.execute(sql, [], function (results) {
            callback(results);
        });
    },


};
