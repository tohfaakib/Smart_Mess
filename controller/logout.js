var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
    if (req.session.email != null){
        next();
    } else {
        res.redirect('/login');
    }
});

router.get('/', (req, res) => {
    req.session.email = null;
    req.session.email = null;
    req.session.fullname = null;
    res.redirect('/login');


});


module.exports = router;