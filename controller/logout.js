var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('logout', {page: 'Logout', menuId:'logout'});
});

module.exports = router;