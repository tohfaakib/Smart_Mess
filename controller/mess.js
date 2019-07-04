var express = require('express');
var router = express.Router();


var mess_db = require.main.require('./models/mess-model');
var user_db = require.main.require('./models/user-model');


router.get('*', (req, res, next) => {
    if (req.session.email != null) {
        next();
    } else {
        res.redirect('/');
    }
});


router.get('/', (req, res) => {
    res.render('mess', {page: 'Mess', menuId: 'mess'});
});




router.get('/create', (req, res) => {
    res.render('create-mess', {page: 'Create Mess', menuId: 'create-mess'});
});


router.post('/create', (req, res) => {
    req.checkBody('mess_id', 'Mess Id cannot be empty.').notEmpty();
    req.checkBody('mess_name', 'Mess Name cannot be empty').notEmpty();



    const err = req.validationErrors();

    if (err){
        res.render('create-mess', {page: 'Create Mess', menuId: 'login', errors: err});
    } else {
        data = {
            mess_id: req.body.mess_id,
            name: req.body.mess_name,
        };

        mess_db.getByMessId(data.mess_id, (result) => {
            console.log(result);
            if (result.length > 0){
                res.render('create-mess', {page: 'Create Mess', menuId: 'create-mess', mess_exist: 'yes'})
            } else {
                mess_db.insert(data, (result) => {
                    if (result) {
                        res.redirect('/');
                    } else {
                        res.send("Mess Creation failed!");
                    }
                });
            }
        });
    }





});


module.exports = router;