var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
    if (req.session.email != null) {
        next();
    } else {
        res.redirect('/login');
    }
});

router.get('/', (req, res) => {
    req.session.email = null;
    req.session.user_id = null;
    req.session.first_name = null;
    req.session.last_name = null;
    req.session.role = null;

    user = {
        user_id: null,
        email: null,
        first_name: null,
        last_name: null,
        role: null,
    };

    res.redirect('/login');

});


module.exports = router;