var express = require('express');
var router = express.Router();
var moment = require('moment');


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

        meal_db.getMealByEmail(data, (allResults) => {
            var all = allResults;

            all.push({user_email: 'zzzzzz zzzzzzzzz zzz'});

            var n_list = [];
            var name_list = [];
            for(var i=0; i<all.length-1; i++){
                name_0 = all[i].user_email;
                name_1 = all[i+1].user_email;

                if (name_0 == name_1){

                    n_list.push(all[i]);
                }else {
                    n_list.push(all[i]);
                    name_list.push(n_list);
                    n_list = [];
                }
            }

            console.log(name_list);




            if (allResults) {

                var data = {
                    mess_id: req.session.mess_id,
                };

                expense_db.getExpensesByEmail(data, (expenses) => {
                    var all_n = expenses;


                    for (var k=0; k<name_list.length; k++){
                        all_n.push({user_email: name_list[k][0].user_email, amount: 0});

                    }

                    all_n.push({user_email: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'});

                    var byUser = all_n.slice(0);
                    byUser.sort(function(a,b) {
                        var x = a.user_email.toLowerCase();
                        var y = b.user_email.toLowerCase();
                        return x < y ? -1 : x > y ? 1 : 0;
                    });



                    var list = [];
                    var e_name_list = [];
                    for(var i=0; i<byUser.length-1; i++){
                        e_name_0 = byUser[i].user_email;
                        e_name_1 = byUser[i+1].user_email;

                        if (e_name_0 == e_name_1){
                            list.push(byUser[i]);
                        }else {
                            list.push(byUser[i]);
                            e_name_list.push(list);
                            list = [];
                        }
                    }

                    res.render('calculation/calculation', { page: 'Calculation', menuId: 'dashboard', moment: moment, name_list: name_list, expenses: expenses, e_name_list: e_name_list});
                });

            } else {
                res.redirect('/');
            }
        });

});


module.exports = router;