var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('contact/contact', {page: 'Conatact Us', menuId: 'contact'});
});

module.exports = router;