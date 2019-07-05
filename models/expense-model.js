var db = require('./db');

module.exports = {
    getById: function (id, callback) {
        var sql = "select * from expenses where id = ?";
        db.execute(sql, [id], function (result) {
            callback(result);
        });
    },

    getAll: function (callback) {

        var sql = "select * from expenses";
        db.execute(sql, [], function (results) {
            callback(results);
        });
    },

    insert: function (expense, callback) {
        sql = "INSERT INTO expenses (user_email, amount, item, date) VALUES (?, ?, ?, ?)";
        db.execute(sql, [expense.email ,expense.amount, expense.item, expense.date], function (results) {
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
