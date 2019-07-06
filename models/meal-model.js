var db = require('./db');

module.exports = {


    getMealByDate: function (meal, callback) {
        var sql = "select * from meal where date = current_date+1 and user_email=?";
        db.execute(sql, [meal.email], function (result) {
            callback(result);
        });
    },

    insert: function (meal, callback) {
        sql = "INSERT INTO meal (date, user_email, mess_id, breakfast, lunch, dinner) VALUES (current_date+1, ?, ?, ?, ?, ?)";
        db.execute(sql, [meal.email, meal.mess_id, meal.breakfast, meal.lunch, meal.dinner], function (results) {
            callback(results);
        });
    },

    updateMealByDate: function (meal, callback) {
        var sql = "update meal set breakfast=?, lunch=?, dinner=? where date = current_date+1 and user_email=?";
        db.execute(sql, [meal.breakfast, meal.lunch, meal.dinner, meal.email], function (status) {
            callback(status);
        });
    },

};