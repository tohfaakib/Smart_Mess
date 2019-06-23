var express = require('express');
var router = express.Router();

var db = require.main.require('./models/db');

router.get('/', (req, res) => {
    if (req.session.email == null) {
        res.render('login', {page: 'Login', menuId:'login'});
    } else {
        res.redirect('/');
    }
});


router.post('/', (req, res) => {
    sql = "SELECT * FROM users WHERE email = '"+req.body.email+"' AND password='"+req.body.password+"'";

    db.dbOperation(sql, (result) => {
        if (result.length > 0) {
            req.session.email = req.body.email;
            res.redirect('/');
        } else {
            res.send("Authentication failed!");
        }
    });

});


module.exports = router;