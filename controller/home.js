var express = require('express');
var router = express.Router();





// router.get('*', (req, res, next) => {
//     if (req.session.email == null) {
//         next();
//     } else {
//         res.redirect('/');
//     }
// });


router.get('/', (req, res) => {
        res.render('home/index', {page: 'Dashboard', menuId:'dashboard'});
});





module.exports = router;