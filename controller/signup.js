var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('signup', {page: 'SignUp', menuId:'signup'});
});

module.exports = router;