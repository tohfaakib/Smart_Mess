// dec
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var exValidator = require('express-validator');

var app = express();
var port = 3000;

// var home = require('./controller/home');
var profile = require('./controller/profile');
var login = require('./controller/login');
var signup = require('./controller/signup');
var logout = require('./controller/logout');
var about = require('./controller/about');
var contact = require('./controller/contact');

// config

app.set('view engine', 'ejs');


// middleware
app.use(bodyParser.urlencoded({'extended': false}));
app.use(expressSession({secret:'secret_pass', saveUninitialized:true, resave:false}));
app.use(exValidator());
app.use('/static', express.static('static'));

// app.use('/', home);
app.use('/profile', profile);
app.use('/login', login);
app.use('/signup', signup);
app.use('/logout', logout);
app.use('/about', about);
app.use('/contact', contact);


// make the data global for ejs template
app.use(function (req, res, next) {

    if (req.session.email !==null){
        app.locals = {
            loggedin: req.session.email,
            fullname: req.session.fullname,
            role: req.session.role,
        }
    }

    next();
});



// Routing
app.get('/', (req, res) => {
    if (req.session.id != null) {
        res.render('home/index', {page: 'Home', menuId:'home', user_id: req.session.user_id});
    } else {
        res.render('home/index', {page: 'Home', menuId:'home', user_id: null});
    }

});



//Server Startup
app.listen(port, () => {
    console.log(`Server Started at, http://127.0.0.1:${port}`);
})


