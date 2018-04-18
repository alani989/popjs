var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var connection = new Sequelize('postgres://localhost:5432/pop');

const answer = connection.import('../models/answers')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/newAnswer', function(req, res) {
    var content = req.body.content;
    var questionid = req.body.questionid;
    var userid = req.body.userid;
    var posted_date = req.body.posted_date;
    var thumbs_up = req.body.thumbs_up;
    var thumbs_down = req.body.thumbs_down;

    answer.create({
        content: content,
        questionid: questionid,
        userid: userid,
        posted_date: posted_date,
        thumbs_up: thumbs_up,
        thumbs_down: thumbs_down,
    })

    answer.sync()

})

module.exports = app;