var db = require('./db');

module.exports = {

    getAllUsersExpensesByMessId: function (data, callback) {

        var sql = "select * from expenses where mess_id=? and YEAR(date) = YEAR(CURRENT_DATE()) AND MONTH(date) = MONTH(CURRENT_DATE()) order by date desc";
        db.execute(sql, [data.mess_id], function (results) {
            callback(results);
        });
    },


};
