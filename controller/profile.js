var express = require('express');
var router = express.Router();


var user = require.main.require('./models/user-model');


router.get('*', (req, res, next) => {
    if (req.session.email != null) {
        next();
    } else {
        res.redirect('/');
    }
});


router.get('/:id', (req, res) => {
    user.getById(req.params.id,(result) => {
        res.render('profile', {page: 'Profile', menuId:'profile', result: result[0]});
    });
});



// router.get('/edit/:id', function(req, res){
//     user.getById(req.params.id, function(result){
//         res.render('home/edit', {user: result[0]});
//     });
// });


// router.post('/', (req, res) => {
//
//     req.checkBody('email', 'Email field cannot be empty.').notEmpty();
//     req.checkBody('email', 'Please enter a valid email').isEmail();
//     req.checkBody('password', 'Password field cannot be empty.').notEmpty();
//     // req.checkBody('email', 'Username can only contain letters, numbers, or underscores.').matches(/^[A-Za-z0-9_-]+$/, 'i');
//     // req.checkBody('password', 'Password must be between 3-60 characters long.').len(3, 30);
//     // req.checkBody("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
//
//     const err = req.validationErrors();
//
//
//     if(err){
//         res.render('login', {page: 'Login', menuId:'login', errors: err});
//     }else{
//         data = {
//             email: req.body.email,
//             password: req.body.password
//         }
//         user.getByEmailPass(data, (result) => {
//             if (result.length > 0) {
//                 req.session.email = req.body.email;
//                 req.session.fullname = result[0].first_name.toUpperCase()+" "+result[0].last_name.toUpperCase();
//                 req.session.role = result[0].role;
//                 res.redirect('/');
//             } else {
//                 res.send("Authentication failed!");
//             }
//         });
//     }
//
//
//
// });


module.exports = router;