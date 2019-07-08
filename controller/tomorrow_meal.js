var express = require('express');
var router = express.Router();
var moment = require('moment');

var ontime = require('ontime');

var expense_db = require.main.require('./models/expense-model');
var meal_db = require.main.require('./models/meal-model');
var user_db = require.main.require('./models/user-model');


router.get('*', (req, res, next) => {
    if (req.session.email != null) {
        next();
    } else {
        res.redirect('/');
    }
});



router.get('/', (req, res) => {

    var data = {
        mess_id: req.session.mess_id,
    };

    meal_db.getMealByTomorrow(data, (result) => {
        if (result){
            console.log(result);
            res.render('tomorrow-meal/tomorrow-meal', { page: 'Tomorrows Meal', menuId: 'dashboard', result: result});
        }
    });









});


module.exports = router;