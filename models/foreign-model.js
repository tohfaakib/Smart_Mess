var db = require('./db');

module.exports = {

    getAllUsersExpensesByMessId: function (data, callback) {

        var sql = "select users.first_name, users.last_name, users.email, expenses.amount, expenses.date from users, expenses where users.mess_id = expenses.mess_id and users.mess_id=?";
        db.execute(sql, [data.mess_id], function (results) {
            callback(results);
        });
    },


};
