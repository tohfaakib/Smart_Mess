var db = require('./db');

module.exports = {
    getByMessId: function (id, callback) {
        var sql = "select * from mess_table where mess_id = ?";
        db.execute(sql, [id], function (result) {
            callback(result);
        });
    },

    getAll: function (callback) {

        var sql = "select * from mess_table";
        db.execute(sql, [], function (results) {
            callback(results);
        });
    },

    insert: function (mess, callback) {
        sql = "INSERT INTO mess_table (mess_id, name) VALUES (?, ?)";
        db.execute(sql, [mess.mess_id, mess.name], function (results) {
            callback(results)
        });
    },
    
    updateById: function (mess, callback) {
        var sql = "update mess_table set mess_id=?, name=? where id=?";
        db.execute(sql, [mess.mess_id, mess.name, mess.id], function (status) {
            callback(status)
        });
    },

    deleteById: function (id, callback) {
        var sql = "delete from mess_table where id=?";
        db.execute(sql, [id], function (status) {
            callback(status)
        });
    },

    deleteByMessId: function (mess_id, callback) {
        var sql = "delete from mess_table where mess_id=?";
        db.execute(sql, [mess_id], function (status) {
            callback(status)
        });
    },

};
