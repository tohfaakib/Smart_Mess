var express = require('express');
var router = express.Router();

var app = require.main.require('./app');


router.get('/', (req, res, next) => {
    if (req.session.email != null){
        next();
    } else {
        res.redirect('/login');
    }
});

router.get('/', (req, res) => {
    req.session.email = null;
    req.session.fullname = null;

    // app.clearAppLocals();

    res.redirect('/login');


});


module.exports = router;