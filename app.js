// dec
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var exValidator = require('express-validator');

var app = express();
var port = 3000;

var home = require('./controller/home');
var profile = require('./controller/profile');
var login = require('./controller/login');
var signup = require('./controller/signup');
var logout = require('./controller/logout');
var about = require('./controller/about');
var contact = require('./controller/contact');
var mess = require('./controller/mess');
var expenses = require('./controller/expenses');
var meal = require('./controller/meal');
var calculation = require('./controller/calculation');


// config

app.set('view engine', 'ejs');


// middleware
app.use(bodyParser.urlencoded({'extended': false}));
app.use(expressSession({secret: 'secret_pass', saveUninitialized: true, resave: false}));
app.use(exValidator());
app.use('/static', express.static('static'));

app.use('/', home);
app.use('/profile', profile);
app.use('/login', login);
app.use('/signup', signup);
app.use('/logout', logout);
app.use('/about', about);
app.use('/contact', contact);
app.use('/mess', mess);
app.use('/expenses', expenses);
app.use('/meal', meal);
app.use('/calculation', calculation);


// Routing
app.get('/', (req, res) => {
    user = {
        user_id: req.session.user_id,
        email: req.session.email,
        phone: req.session.phone,
        first_name: req.session.first_name,
        last_name: req.session.last_name,
        role: req.session.role,
        mess_id: req.session.mess_id,
        status: req.session.status,
    };
    if (req.session.id != null) {
        res.render('home/index', {page: 'Home', menuId: 'home', user});
    } else {
        res.render('home/index', {page: 'Home', menuId: 'home', user: null});
    }

});


//Server Startup
app.listen(port, () => {
    console.log(`Server Started at, http://127.0.0.1:${port}`);
});


