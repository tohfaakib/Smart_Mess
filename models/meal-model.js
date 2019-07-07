var db = require('./db');

module.exports = {


    getMealByDateEmail: function (meal, callback) {
        var sql = "select * from meal where date = current_date+1 and user_email=?";
        db.execute(sql, [meal.email], function (result) {
            callback(result);
        });
    },

    getAllUsersMealByMessId: function (data, callback) {

        var sql = "select * from meal where mess_id=? and current_date >= date and YEAR(date) = YEAR(CURRENT_DATE()) AND MONTH(date) = MONTH(CURRENT_DATE()) order by date asc";
        db.execute(sql, [data.mess_id], function (results) {
            callback(results);
        });
    },

    insert: function (meal, callback) {
        sql = "INSERT INTO meal (date, name, user_email, mess_id, breakfast, lunch, dinner) VALUES (current_date-4, ?, ?, ?, ?, ?, ?)";
        db.execute(sql, [meal.name, meal.email, meal.mess_id, meal.breakfast, meal.lunch, meal.dinner], function (results) {
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