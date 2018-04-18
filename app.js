//entry point for application
const express = require('express');
const passport = require('passport'); //only one instance of passport does authentication
// for logging messages, like console.log
var Sequelize = require('sequelize'); //requiring sequelize library
//env variables are global, 
const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(require('./app/api/newUser'));
app.use(require('./app/api/questions'));
app.use(require('./app/api/answers'));
app.use(require('./app/routes/signup'));
app.use(require('./app/routes/index'));
app.use(require('./app/routes/question'));



app.use(express.static('./app/public'))

app.get('/', function (req, res) {
    res.render('signup');
});

app.listen(port, function () {
    console.log('Now listneing on Port: ', +port)
});