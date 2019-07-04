var express = require('express');
var router = express.Router();


var user_db = require.main.require('./models/user-model');


router.get('*', (req, res, next) => {
    if (req.session.email != null) {
        next();
    } else {
        res.redirect('/');
    }
});


router.get('/create', (req, res) => {

    res.render('create-mess', {page: 'Create Mess', menuId: 'create-mess'});
});




module.exports = router;