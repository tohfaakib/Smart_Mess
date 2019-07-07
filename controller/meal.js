var express = require('express');
var router = express.Router();
var moment = require('moment');

var ontime = require('ontime');

var expense_db = require.main.require('./models/expense-model');
var meal_db = require.main.require('./models/meal-model');
var user_db = require.main.require('./models/user-model');



ontime({
    cycle: ['14:30:00']
}, function (ot) {
    console.log("on time runs!");

    user_db.getAllMembers((results) => {
        if(results){
            for (var i =0; i < results.length; i++) {
                data ={
                    name: results[i].first_name,
                    email: results[i].email,
                    mess_id: results[i].mess_id,
                    breakfast: 1,
                    lunch: 1,
                    dinner: 1
                };

                meal_db.insert(data, (result)=> {
                    if (result){
                        console.log("inserted");
                    } else {
                        console.log("not inserted");
                    }
                })
            }
        } else {
            console.log("Cannot find users")
        }
    });


});



router.get('*', (req, res, next) => {
    if (req.session.email != null) {
        next();
    } else {
        res.redirect('/');
    }
});


router.get('/', (req, res) => {

    var data={
      email: req.session.email,
    };
    meal_db.getMealByDateEmail(data,(result) => {

        // console.log(result);

        var data={
            mess_id: req.session.mess_id,
        };

        meal_db.getAllUsersMealByMessId(data, (allResults) => {
            // console.log(allResult[0]);
            var allResult = allResults;

            allResult.push({date: 'mara khaw'});

            var list = [];
            var date_list = [];
            for(var i=0; i<allResult.length-1; i++){
                date_0 = allResult[i].date;
                date_1 = allResult[i+1].date;

                if (date_0.toString() == date_1.toString()){
                    // console.log(allResult[i].date);
                    list.push(allResult[i]);
                }else {
                    list.push(allResult[i]);
                    date_list.push(list);
                    list = [];
                }
            }

            console.log(date_list);
            if(result && allResult)
            {
                console.log(date_list);

                res.render('meal', {page: 'Meal', menuId: 'dashboard', moment: moment, result: result[0], date_list: date_list});
            }
            else{
                res.redirect('/meal');
            }
        });


    });

});


router.post('/', (req, res) => {

    var data={
        breakfast: 0,
        lunch: 0,
        dinner: 0,
        email: req.session.email,
    };
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

    meal_db.updateMealByDate(data, (result) => {
        if (result) {
            res.redirect('/meal');
        } else {
            res.send("Meal updating failed");
        }
    });

});


module.exports = router;