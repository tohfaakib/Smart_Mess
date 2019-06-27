var express = require('express');
var router = express.Router();


var user = require.main.require('./models/user-model');


router.get('*', (req, res, next) => {
    if (req.session.email != null) {
        next();
    } else {
        res.redirect('/');
    }
});


router.get('/:id', (req, res) => {
    if (req.session.user_id == req.params.id) {
        user.getById(req.params.id,(result) => {
            res.render('profile', {page: 'Profile', menuId:'profile', result: result[0]});
        });
    } else {
        res.redirect('/profile/'+req.session.user_id);
    }

});


router.get('/edit/:id', (req, res) => {
    if (req.session.user_id == req.params.id) {
        user.getById(req.params.id,(result) => {
            console.log(result);
            res.render('edit_profile', {page: 'Edit Profile', menuId:'profile', email_exist: null, phone_exist: null, result: result[0]});
        });
    } else {
        res.redirect('/profile/edit/'+req.session.user_id);
    }

});



router.post('/edit/:id', (req, res) => {
    if (req.session.user_id == req.params.id) {

        user.getById(req.params.id,(results) => {


            var data = {
                email: req.body.email
            };

            user.getByEmail(data, (result) => {
                if (result.length > 0) {
                    res.render('edit_profile', {page: 'Edit Profile', menuId:'profile', email_exist: 'yes', phone_exist: null});
                }
                else {
                    var data = {
                        phone: req.body.phone
                    };
                    user.getByPhone(data, (result) => {
                        if (result.length > 0) {
                            res.render('edit_profile', {page: 'Edit Profile', menuId:'profile', email_exist: null, phone_exist: 'yes'});
                        } else {
                            req.checkBody('first_name', '*First Name field cannot be empty!').notEmpty();
                            req.checkBody('last_name', '*Last Name field cannot be empty!').notEmpty();
                            req.checkBody('email', '*Email field cannot be empty!').notEmpty();
                            req.checkBody('email', '*Please enter a valid email!').isEmail();
                            req.checkBody('phone', '*Phone Number field cannot be empty!').notEmpty();
                            req.checkBody('role', '*Please select a valid role!').notEmpty();
                            // req.checkBody('email', 'Username can only contain letters, numbers, or underscores.').matches(/^[A-Za-z0-9_-]+$/, 'i');

                            const err = req.validationErrors();

                            if (err){
                                res.render('edit_profile', {page: 'Edit Profile', menuId:'profile', email_exist: 'yes', phone_exist: null, errors: err});
                            } else {
                                var data = {
                                    id: req.params.id,
                                    first_name: req.body.first_name,
                                    last_name: req.body.last_name,
                                    email: req.body.email,
                                    phone: req.body.phone,
                                    password: req.body.password,
                                    role: req.body.role,
                                    social_link: req.body.social_link
                                };

                                user.updateById(data, (result) => {
                                    if (result) {
                                        res.redirect('/profile/'+req.params.id);
                                    } else {
                                        res.send("Signup Failed!");
                                    }
                                });
                            }
                        }
                    });
                }
            });


        });

















        user.updateById(req.params.id,(result) => {
            // console.log(result);
            res.render('edit_profile', {page: 'Edit Profile', menuId:'profile', email_exist: null, phone_exist: null, result: result[0]});
        });
    } else {
        res.redirect('/profile/edit/'+req.session.user_id);
    }

});









module.exports = router;