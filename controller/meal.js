var express = require('express');
var router = express.Router();
var moment = require('moment');

var ontime = require('ontime');

var expense_db = require.main.require('./models/expense-model');
var meal_db = require.main.require('./models/meal-model');



ontime({
    cycle: ['15:13:00']
}, function (ot) {
    console.log("on time runs!")
});



router.get('*', (req, res, next) => {
    if (req.session.email != null) {
        next();
    } else {
        res.redirect('/');
    }
});


router.get('/', (req, res) => {
    res.render('meal', {page: 'Meal', menuId: 'dashboard', moment: moment});
});


router.post('/', (req, res) => {

    var data={
        breakfast: 0,
        lunch: 0,
        dinner: 0,
    }
    if(req.body.breakfast == "on" )
    {
        data.breakfast = 1;
    }
    if(req.body.lunch == "on" )
    {
        data.lunch = 1;
    }
    if(req.body.dinner == "on" )
    {
        data.dinner = 1;
    }

    meal_db.updateByDate(data, (result) => {
        if (result) {
            res.redirect('/meal');
        } else {
            res.send("Meal updating failed");
        }
    });

});


module.exports = router;