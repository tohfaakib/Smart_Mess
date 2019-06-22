var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('login', {page: 'Login', menuId:'login'});
});

module.exports = router;