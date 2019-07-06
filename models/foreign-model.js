var db = require('./db');

module.exports = {

    getAllUsersExpensesByMessId: function (data, callback) {

        var sql = "select * from expenses where mess_id=? order by date desc";
        db.execute(sql, [data.mess_id], function (results) {
            callback(results);
        });
    },


};
