var express = require('express');
var router = express.Router();


var mess_db = require.main.require('./models/mess-model');
var user_db = require.main.require('./models/user-model');


router.get('*', (req, res, next) => {
    if (req.session.email != null) {
        next();
    } else {
        res.redirect('/');
    }
});


// router.get('/', (req, res) => {
//     res.render('mess', {page: 'Mess', menuId: 'mess'});
// });


router.get('/:id', (req, res) => {
    res.render('mess', {page: 'Mess', menuId: 'mess'});

});


router.get('/members/:id', (req, res) => {
    data = {
        mess_id: req.params.id,
    };
    user_db.getAllByMessId(data, (result) => {
        console.log(result);
        res.render('view-member', {page: 'Members', menuId: 'mess', result: result});
    });


});


router.get('/invite/:id', (req, res) => {
        res.render('invite-member', {page: 'Invite Members', menuId: 'mess'});
});


router.post('/invite/:id', (req, res) => {
    console.log(req.body.member_email);

    data = {
        email: req.body.member_email,
        mess_id: req.session.mess_id,
        status: "invited",
    };

    user_db.updateByStatus(data, (result) => {
        if (result) {
            res.redirect('/mess/'+data.mess_id);
        } else {
            res.send("Cannot Invite!")
        }
    });



    // res.render('invite-member', {page: 'Invite Members', menuId: 'mess'});
});




router.get('/create', (req, res) => {
    res.render('create-mess', {page: 'Create Mess', menuId: 'create-mess'});
});


router.post('/create', (req, res) => {
    req.checkBody('mess_id', 'Mess Id cannot be empty.').notEmpty();
    req.checkBody('mess_name', 'Mess Name cannot be empty').notEmpty();



    const err = req.validationErrors();

    if (err){
        res.render('create-mess', {page: 'Create Mess', menuId: 'login', errors: err});
    } else {
        data = {
            mess_id: req.body.mess_id,
            name: req.body.mess_name,
        };

        mess_db.getByMessId(data.mess_id, (result) => {
            console.log(result);
            if (result.length > 0){
                res.render('create-mess', {page: 'Create Mess', menuId: 'create-mess', mess_exist: 'yes'})
            } else {
                mess_db.insert(data, (result) => {
                    if (result) {
                        data = {
                          mess_id: req.body.mess_id,
                          email: req.session.email
                        };

                        user_db.updateByMessId(data, (result) => {
                            if (result) {

                                req.session.mess_id = data.mess_id;
                                user = {
                                  mess_id: req.session.mess_id,
                                };

                                res.redirect('/mess/'+data.mess_id);
                            } else {
                                res.send("Unexpected error occurred!")
                            }
                        });
                    } else {
                        res.send("Mess Creation failed!");
                    }
                });
            }
        });
    }





});


module.exports = router;