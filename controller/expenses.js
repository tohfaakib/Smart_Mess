var express = require('express');
var router = express.Router();
var moment = require('moment');

var expense_db = require.main.require('./models/expense-model');
var foreign_db = require.main.require('./models/foreign-model');


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

    foreign_db.getAllUsersExpensesByMessId(data, (result) => {
        // console.log(result);

        res.render('expenses', {page: 'Dashboard', menuId: 'dashboard', result: result, moment: moment});

    });


});



router.post('/', (req, res) => {

    var data = {
        mess_id: req.session.mess_id,
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