var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var connection = new Sequelize('postgres://localhost:5432/pop');

var user = connection.import('../models/users');
const models = {
    user: connection.import('../models/users')
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/newUser', function(req, res) {
    var username = req.body.userName;
    var password = req.body.password;
    var email = req.body.email;
    user.create({
        username: username,
        password: password,
        email: email
    })

    user.sync()

})

module.exports = app;