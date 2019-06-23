var express = require('express');
var router = express.Router();

router.get('/', (req, response) => {
    req.session.email = null;
    response.redirect('/login');
});







module.exports = router;