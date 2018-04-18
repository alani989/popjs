module.exports = function (app, db) {

    app.get('/question', function (req, res) {
        titles = [];
        contents = [];
        categories = []
        ids = [];
        dates = []

        db.question.findAll({
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
        })

        db.question.sync().then(function () {
            res.render('question', {
                title: titles,
                content: contents,
                category: categories,
                userid: ids,
                date_posted: dates
            })
        })
    })
}