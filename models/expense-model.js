var db = require('./db');

module.exports = {
    getById: function (id, callback) {
        var sql = "select * from expenses where id = ?";
        db.execute(sql, [id], function (result) {
            callback(result);
        });
    },

    getAllUsersExpensesByMessId: function (data, callback) {

        var sql = "select * from expenses where mess_id=? and current_date >= date and YEAR(date) = YEAR(CURRENT_DATE()) AND MONTH(date) = MONTH(CURRENT_DATE()) order by date desc";
        db.execute(sql, [data.mess_id], function (results) {
            callback(results);
        });
    },


    getExpensesByEmail: function (data, callback) {

        var sql = "select * from expenses where mess_id=? and current_date >= date and YEAR(date) = YEAR(CURRENT_DATE()) AND MONTH(date) = MONTH(CURRENT_DATE()) order by user_email asc";
        db.execute(sql, [data.mess_id], function (results) {
            callback(results);
        });
    },

    getAll: function (callback) {

        var sql = "select * from expenses";
        db.execute(sql, [], function (results) {
            callback(results);
        });
    },

    insert: function (expense, callback) {
        sql = "INSERT INTO expenses (full_name, user_email, mess_id, amount, item, date) VALUES (?, ?, ?, ?, ?, ?)";
        db.execute(sql, [expense.full_name, expense.email, expense.mess_id, expense.amount, expense.item, expense.date], function (results) {
            callback(results)
        });
    },

    updateById: function (expense, callback) {
        var sql = "update expenses set id=?, name=? where id=?";
        db.execute(sql, [expense.email, expense.item, expense.date, expense.id], function (status) {
            callback(status)
        });
    },

    deleteById: function (id, callback) {
        var sql = "delete from expenses where id=?";
        db.execute(sql, [id], function (status) {
            callback(status)
        });
    },


};
