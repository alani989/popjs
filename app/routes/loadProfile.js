module.exports = function(app,db) {

    app.get('/loadProfile/:id', function (req, res) {
        titles = [];
        contents = [];
        categories = []
        dates = []

        db.question.findAll({
            where: {
                userid: req.params.id
            }
        }).then(function (data) {
            for (var i = 0; i < data.length; i++) {
                titles.push(data[i].title)
                contents.push(data[i].content)
                categories.push(data[i].category)
                dates.push(data[i].posted_date)
            }

            db.question.sync().then(function () {
                res.render('dashboard', {
                    title: titles,
                    content: contents,
                    category: categories,
                    date_posted: dates,
                    userid: req.params.id
                })
            })
        })


    })
}