var express = require('express');
var router = express.Router();


// router.get('*', (req, res, next) => {
//     if (req.session.email == null) {
//         next();
//     } else {
//         res.redirect('/');
//     }
// });


// router.get('/', (req, res) => {
//     res.render('home/index', {page: 'Dashboard', menuId: 'dashboard'});
// });



router.post('/', (req, res) => {
    console.log(req.body.mess_name);
});


module.exports = router;