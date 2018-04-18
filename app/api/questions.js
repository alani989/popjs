var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var connection = new Sequelize('postgres://localhost:5432/pop');

const question = connection.import('../models/questions')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/question', function (req, res) {
//     var title = req.body.title;
//     var content = req.body.content;
//     var category = req.body.category;
//     var userid = req.body.userid;
//     var date_posted = req.body.date_posted
//     model.question.create({
//         title: title,
//         content: content,
//         category: category,
//         userid: userid,
//         date_posted: date_posted
//     })

//     model.question.sync()

// })

app.get('/question', function (req, res) {
    titles = [];
    contents = [];
    categories = []
    ids = [];
    dates = []

    question.findAll({
        where: {
            userid: 1
        }
    }).then(function (data) {
        for (var i = 0; i < data.length; i++) {
            titles.push(data[i].title)
            contents.push(data[i].content)
            categories.push(data[i].category)
            ids.push(data[i].userid)
            dates.push(data[i].posted_date)
        }
        console.log(titles);
        console.log(contents);
        console.log(categories);
        console.log(ids);
        console.log(dates);
    })

    question.sync().then(function () {
        res.render('question', {
            title: titles,
            content: contents,
            category: categories,
            userid: ids,
            date_posted: dates
        })
    })

})

module.exports = app;