var db = require('./db');

module.exports = {


    updateByDate: function (meal, callback) {
        var sql = "update meal set breakfast=?, lunch=?, dinner=? where date = current_date";
        db.execute(sql, [meal.breakfast, meal.lunch, meal.dinner], function (status) {
            callback(status);
        });
    },

};