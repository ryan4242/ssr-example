var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main', partialsDir: 'views/partials/'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/what-PC', function (req, res) {
    res.render('what-PC');
});

app.get('/rock-drop-calc', function (req, res) {
    res.render('rock-drop-calc');
});

app.listen(3000);
