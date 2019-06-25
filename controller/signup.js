var express = require('express');
var router = express.Router();
var user = require.main.require('./models/user-model');


router.get('*', (req, res, next) => {
    if (req.session.email == null) {
        next();
    } else {
        res.redirect('/');
    }
});


router.get('/', (req, res) => {
    if (req.session.email == null) {
        res.render('signup', {page: 'SignUp', menuId:'signup', first_name:null, last_name:null, email:null, password:null, password_confirmation:null, role:null, pass_mismatch:null, email_exist: null});
    } else {
        res.redirect('/');
    }
});

router.post('/', (req, res) => {
    var first_name = '';
    var last_name = '';
    var email = '';
    var password = '';
    var password_confirmation = '';
    var role = '';

    if (req.body.first_name === '' || req.body.last_name === '' || req.body.email === '' || req.body.password === '' || req.body.password_confirmation === '' || req.body.role === '') {

        if (req.body.first_name === '') {
                first_name = 'empty';
        } else if (req.body.last_name === '') {
                last_name = 'empty';
        } else if (req.body.email === '') {
                email = 'empty';
        } else if (req.body.password === '') {
                password = 'empty';
        } else if (req.body.password_confirmation === '') {
                password_confirmation = 'empty';
        } else if (req.body.role !== 'Manager' || req.body.role !== 'Member' ){
                 role = 'empty';
        }


        res.render('signup', {page: 'SignUp', menuId:'signup', first_name, last_name, email, password, password_confirmation, role, pass_mismatch:null, email_exist: null});
    }
    else {

        if (req.body.password === req.body.password_confirmation) {

            var data = {
                email: req.body.email
            }

            user.getByEmail(data, (result) => {
                if (result.length > 0) {
                    res.render('signup', {page: 'SignUp', menuId:'signup', first_name:null, last_name:null, email:null, password:null, password_confirmation:null, role:null, pass_mismatch:null, email_exist: 'yes'});
                }
                else {

                    var data = {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        password: req.body.password,
                        role: req.body.role
                    }
                    user.insert(data, (result) => {
                        if (result) {
                                res.redirect('/login');
                        } else {
                                res.send("Signup Failed!");
                        }
                    });
                }
            });


        }
        else {
            res.render('signup', {page: 'SignUp', menuId:'signup', first_name:null, last_name:null, email:null, password:null, password_confirmation:null, role:null, pass_mismatch:'yes', email_exist: null});
        }
    }


});



module.exports = router;