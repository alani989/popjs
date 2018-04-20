module.exports = function(app,db) {

    app.get('/loadProfile/:id', function (req, res) {
        var titles = [];
        var contents = [];
        var categories = []
        var dates = []
        var userName = ""

        var questionid = [];
        var answersStorage = [];

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
                questionid.push(data[i].id)
                db.answer.findAll({
                    attributes: ['content', 'questionid'],
                    where: {
                        questionid: data[i].id
                    }
                }).then(function(answersResults) {
                    for (var i=0;i<answersResults.length;i++) {
                        answersStorage.push([answersResults[i].questionid , answersResults[i].content])
                    }
                })
            } //end loop

            db.user.findOne ({
                attributes: ['username'],
                where: {id : req.params.id}
    
            }).then(function(data) {
                userName = data.username
            })

            db.question.sync().then(function () {
                res.render('dashboard', {
                    questionid: questionid,
                    title: titles,
                    content: contents,
                    category: categories,
                    date_posted: dates,
                    userid: req.params.id,
                    answersStorage: answersStorage,
                    userName: userName

                })
            })
        })


    })
}