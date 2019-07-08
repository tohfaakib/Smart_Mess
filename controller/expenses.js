var express = require('express');
var router = express.Router();
var moment = require('moment');

var ontime = require('ontime')

var expense_db = require.main.require('./models/expense-model');




//
// ontime({
//     cycle: ['15:13:00']
// }, function (ot) {
//    console.log("on time runs!")
// });



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

    expense_db.getAllUsersExpensesByMessId(data, (result) => {
        // console.log(result);

        res.render('expenses/expenses', {page: 'Expenses', menuId: 'dashboard', result: result, moment: moment});

    });


});



router.post('/', (req, res) => {

    console.log(req.session.first_name +" "+req.session.last_name,);

    var data = {
        mess_id: req.session.mess_id,
        full_name: req.session.first_name +" "+req.session.last_name,
        email: req.session.email,
        amount: req.body.amount,
        item: req.body.item,
        date: req.body.date
    };

    expense_db.insert(data, (result) => {
        if (result) {
            res.redirect('/expenses');
        } else {
            res.send("Expenses adding failed");
        }
    });
});


module.exports = router;