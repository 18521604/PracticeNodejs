require('dotenv').config()
var express = require('express');
var cookieParser = require('cookie-parser')

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');

var middleWare = require('./middleware/auth.middleware');

var port = 3001;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SECTION_SECRET))

app.use(express.static('public'))

app.get('/',function(req, res) {
    res.render('index');
});

app.use('/users', middleWare.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);

app.listen(port, function() {
    console.log("Server listening on port: " + port);
});