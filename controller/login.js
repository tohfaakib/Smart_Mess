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
        res.render('login', {page: 'Login', menuId:'login'});
    } else {
        res.redirect('/');
    }
});


router.post('/', (req, res) => {

    data = {
        email: req.body.email,
        password: req.body.password
    }
    user.getByEmailPass(data, (result) => {
        if (result.length > 0) {
            req.session.email = req.body.email;
            // res.locals.user = req.session.email;
            // console.log(res.locals.user);
            res.redirect('/');
        } else {
            res.send("Authentication failed!");
        }
    });

});


module.exports = router;