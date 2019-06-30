var express = require('express');
var router = express.Router();
var user_db = require.main.require('./models/user-model');


router.get('*', (req, res, next) => {
    if (req.session.email == null) {
        next();
    } else {
        res.redirect('/');
    }
});


router.get('/', (req, res) => {
    res.render('signup', {page: 'SignUp', menuId: 'signup'});
});


router.post('/', (req, res) => {
    if (req.body.password === req.body.password_confirmation) {
        var data = {
            email: req.body.email
        };

        user_db.getByEmail(data, (result) => {
            if (result.length > 0) {
                res.render('signup', {page: 'SignUp', email_exist: 'yes'});
            } else {
                var data = {
                    phone: req.body.phone
                };
                user_db.getByPhone(data, (result) => {
                    if (result.length > 0) {
                        res.render('signup', {page: 'SignUp', menuId: 'signup', phone_exist: 'yes'});
                    } else {
                        req.checkBody('first_name', '*First Name field cannot be empty!').notEmpty();
                        req.checkBody('last_name', '*Last Name field cannot be empty!').notEmpty();
                        req.checkBody('email', '*Email field cannot be empty!').notEmpty();
                        req.checkBody('email', '*Please enter a valid email!').isEmail();
                        req.checkBody('phone', '*Phone Number field cannot be empty!').notEmpty();
                        req.checkBody('password', '*Password field cannot be empty!').notEmpty();
                        req.checkBody('password_confirmation', '*Confirm Password field cannot be empty!').notEmpty();
                        req.checkBody('role', '*Please select a valid role!').notEmpty();
                        // req.checkBody('email', 'Username can only contain letters, numbers, or underscores.').matches(/^[A-Za-z0-9_-]+$/, 'i');
                        req.checkBody('password', '*Password must be between 3-60 characters long!').len(3, 30);

                        const err = req.validationErrors();

                        if (err) {
                            res.render('signup', {page: 'SignUp', menuId: 'signup', errors: err});
                        } else {
                            var data = {
                                first_name: req.body.first_name,
                                last_name: req.body.last_name,
                                email: req.body.email,
                                phone: req.body.phone,
                                password: req.body.password,
                                role: req.body.role,
                                social_link: req.body.social_link
                            };

                            user_db.insert(data, (result) => {
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
        });

    } else {
        res.render('signup', {page: 'SignUp', menuId: 'signup', pass_mismatch: 'yes'});
    }
});


module.exports = router;