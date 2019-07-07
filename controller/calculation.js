var express = require('express');
var router = express.Router();
var moment = require('moment');

var ontime = require('ontime');

var expense_db = require.main.require('./models/expense-model');
var meal_db = require.main.require('./models/meal-model');
var user_db = require.main.require('./models/user-model');




router.get('/', (req, res) => {

        var data = {
            mess_id: req.session.mess_id,
        };

        meal_db.getMealByEmail(data, (allResults) => {
            // console.log(allResult[0]);
            var all = allResults;



            all.push({user_email: 'mara khaw'});

            var n_list = [];
            var name_list = [];
            for(var i=0; i<all.length-1; i++){
                name_0 = all[i].user_email;
                name_1 = all[i+1].user_email;

                if (name_0 == name_1){
                    // console.log(allResult[i].date);
                    n_list.push(all[i]);
                }else {
                    n_list.push(all[i]);
                    name_list.push(n_list);
                    n_list = [];
                }
            }


            console.log(name_list);

            if (allResults) {

                res.render('calculation', {
                    page: 'Calculation',
                    menuId: 'dashboard',
                    moment: moment,
                    name_list: name_list
                });
            } else {
                res.redirect('/');
            }
        });

});


module.exports = router;