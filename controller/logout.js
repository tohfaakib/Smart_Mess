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
    req.session.fullname = null;
<<<<<<< HEAD

=======
    req.app.locals = {
        loggedin: null,
        fullname: null
    }
>>>>>>> 2cbd66fc79755e422829c9e293e16e8a728a666e

    res.redirect('/login');


});



module.exports = router;