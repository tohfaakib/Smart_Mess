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
            res.render('edit_profile', {page: 'Edit Profile', menuId:'profile', email_exist: null, result: result[0]});
        });
    } else {
        res.redirect('/profile/edit/'+req.session.user_id);
    }

});









module.exports = router;