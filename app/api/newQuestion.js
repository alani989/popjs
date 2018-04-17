var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var connection = new Sequelize('postgres://localhost:5432/pop');

var user = connection.import('../models/questions');
const models = {
    user: connection.import('../models/questions')
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/newQuestion', function(req, res) {
    var title = req.body.title;
    var content = req.body.content;
    var category = req.body.category;
    var userid = req.body.userid;
    question.create({
        title: title,
        content: content,
        category: category,
        userid: userid,
    })

    question.sync()

})

module.exports = app;