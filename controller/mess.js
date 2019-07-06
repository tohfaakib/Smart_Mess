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

router.get('/create', (req, res) => {
    if(req.session.role == "Manager") {
        if (req.session.mess_id == null || req.session.mess_id == '') {
            res.render('create-mess', {page: 'Create Mess', menuId: 'create-mess'});
        } else {
            res.redirect('/');
        }
    }else {
        res.redirect('/');
    }
});




router.get('/:id', (req, res) => {
    if(req.session.status != "invited" && (req.session.mess_id != null || req.session.mess_id != '')) {
        res.render('mess', {page: 'Mess', menuId: 'mess'});
    }else {
        res.redirect('/');
    }

});


router.get('/members/:id', (req, res) => {
    if(req.session.status != "invited" && (req.session.mess_id != null || req.session.mess_id != '')){
        data = {
            mess_id: req.params.id,
        };
        user_db.getAllByMessId(data, (result) => {
            res.render('view-member', {page: 'Members', menuId: 'mess', result: result});
        });
    }else {
        res.redirect('/');
    }


});



router.get('/invitation/:id', (req, res) => {
    if(req.session.role == "Member")
    {
        mess_db.getByMessId(req.params.id, (result) => {
            res.render('invitation', {page: 'Invitation', menuId: 'mess', result: result[0]});
        });
    }
    else
    {
        res.redirect("/");
    }

});


router.get('/accept/:id', (req, res) => {

    data = {
        email: req.session.email,
        status: '',
    };
    user_db.updateOnlyStatus(data, (result) => {
        if (result) {

            req.session.status = '';
            user = {
              status: req.session.status,
            };

            res.redirect('/');
        } else {
            res.send("Cannot Accept!");
        }
    });

});


router.get('/cancel/:id', (req, res) => {

    data = {
        email: req.session.email,
        mess_id: null,
        status: null,
    };

    user_db.updateByStatus(data, (result) => {
        if (result) {
            req.session.status = null;
            user = {
                status: req.session.status,
            };
            res.redirect('/');
        } else {
            res.send("Cannot Cancel");
        }
    });

});



router.get('/invite/:id', (req, res) => {
    if(req.session.role != "Member") {
        res.render('invite-member', {page: 'Invite Members', menuId: 'mess'});
    }else {
        res.redirect('/');
    }
});


router.post('/invite/:id', (req, res) => {

    if(req.session.role != "Member")
    {
        data = {
            email: req.body.member_email,
            mess_id: req.session.mess_id,
            status: "invited",
        };

        user_db.getByEmail(data,(result) => {

            if(result){
                if(result[0].mess_id == null){
                    user_db.updateByStatus(data, (result) => {
                        if (result) {
                            res.redirect('/mess/'+data.mess_id);
                        } else {
                            res.send("Cannot Invite!");
                        }
                    });
                }else {
                    res.render('invite-member', {page: 'Invite Members', menuId: 'mess', is_invited: 'yes'});
                }
            }else {
                res.render('invite-member', {page: 'Invite Members', menuId: 'mess', user_exist: 'no'});
            }
        });


    }



    // res.render('invite-member', {page: 'Invite Members', menuId: 'mess'});
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
            if (result.length > 0){
                res.render('create-mess', {page: 'Create Mess', menuId: 'create-mess', mess_exist: 'yes'})
            } else {
                mess_db.insert(data, (result) => {
                    if (result) {
                        data = {
                            mess_id: req.body.mess_id,
                            email: req.session.email,
                            status: ''
                        };

                        user_db.updateByMessId(data, (result) => {
                            if (result) {

                                req.session.mess_id = data.mess_id;
                                user = {
                                  mess_id: req.session.mess_id,
                                };

                                res.redirect('/');
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
