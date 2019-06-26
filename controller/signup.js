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
        if (req.body.password === req.body.password_confirmation) {
            var data = {
                email: req.body.email
            };

            user.getByEmail(data, (result) => {
                if (result.length > 0) {
                    res.render('signup', {page: 'SignUp', menuId:'signup', pass_mismatch: null, email_exist: 'yes'});
                }
                else {

                    req.checkBody('first_name', '*First Name field cannot be empty!').notEmpty();
                    req.checkBody('last_name', '*Last Name field cannot be empty!').notEmpty();
                    req.checkBody('email', '*Email field cannot be empty!').notEmpty();
                    req.checkBody('email', '*Please enter a valid email!').isEmail();
                    req.checkBody('password', '*Password field cannot be empty!').notEmpty();
                    req.checkBody('password_confirmation', '*Confirm Password field cannot be empty!').notEmpty();
                    req.checkBody('role', '*Please select a valid role!').notEmpty();
                    // req.checkBody('email', 'Username can only contain letters, numbers, or underscores.').matches(/^[A-Za-z0-9_-]+$/, 'i');
                    req.checkBody('password', '*Password must be between 3-60 characters long!').len(3, 30);

                    const err = req.validationErrors();

                    if (err){
                        res.render('signup', {page: 'SignUp', menuId:'signup', pass_mismatch:null, email_exist: null, errors: err});
                    } else {
                        var data = {
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            password: req.body.password,
                            role: req.body.role
                        };

                        user.insert(data, (result) => {
                            if (result) {
                                res.redirect('/login');
                            } else {
                                res.send("Signup Failed!");
                            }
                        });
                    }
                    }

            });

        }
        else {
            res.render('signup', {page: 'SignUp', menuId:'signup', pass_mismatch:'yes', email_exist: null});
        }



});



module.exports = router;