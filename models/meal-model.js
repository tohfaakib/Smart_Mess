var db = require('./db');

module.exports = {


    getMealByDate: function (meal, callback) {
        var sql = "select * from meal where date = current_date and user_email=?";
        db.execute(sql, [meal.email], function (result) {
            callback(result);
        });
    },

    updateMealByDate: function (meal, callback) {
        var sql = "update meal set breakfast=?, lunch=?, dinner=? where date = current_date";
        db.execute(sql, [meal.breakfast, meal.lunch, meal.dinner], function (status) {
            callback(status);
        });
    },

};