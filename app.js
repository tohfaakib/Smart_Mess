var express = require('express');
var ejs = require('ejs');
var app = express();
var port = 3000;

var login = require('./controller/login');
var signup = require('./controller/signup');
var logout = require('./controller/logout');
var about = require('./controller/about');
var contact = require('./controller/contact');

// config

app.set('view engine', 'ejs');


// middleware
app.use('/login', login);
app.use('/signup', signup);
app.use('/logout', logout);
app.use('/about', about);
app.use('/contact', contact);



// Routing
app.get('/', (request, response) => {
    // response.send("Welcome");
    response.render('index', {page: 'Home', menuId:'home'});
});



//Server Startup
app.listen(port, () => {
    console.log(`Server Started at, http://127.0.01:${port}`);
})