var express = require('express');

var useRoute = require('./routes/user.route');

var port = 3001;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'))

app.get('/',function(req, res) {
    res.render('index');
});

app.use('/users', useRoute);

app.listen(port, function() {
    console.log("Server listening on port: " + port);
});