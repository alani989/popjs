const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/connection');
const promise = require('bluebird')
const bcrypt = require('bcrypt');
const alert = require('alert-node');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('./app/public'))

require('./app/routes')(app, db, bcrypt, promise, alert);

app.get('/', function (req, res) {
    res.render('signup');
});

app.listen(port, () => {
    console.log('Live on port ' + port);
})


