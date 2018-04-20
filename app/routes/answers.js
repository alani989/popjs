module.exports = function (app, db) {

    app.get('/answers/:id?', function (req, res) {
        var category = req.params.id;
        var questionid = [];
        var titles = [];
        var contents = [];
        var dates = []
        var userid = req.query.xyz

        var answersStorage = [];

        db.question.findAll({ where: { category: category } }).then(data => {
            for (var i = 0; i < data.length; i++) {
                questionid.push(data[i].id);
                titles.push(data[i].title);
                contents.push(data[i].content);
                dates.push(data[i].posted_date);
                db.answer.findAll({
                attributes: ['content', 'questionid'],
                where: {
                    questionid: questionid[i]
                }
            }).then(function (answersResults) {
                for (var i = 0; i < answersResults.length; i++) {
                    answersStorage.push([answersResults[i].questionid, answersResults[i].content])
                }
            })
        }

            db.question.sync().then(function () {
                res.render('answers', {
                    questionid: questionid,
                    title: titles,
                    content: contents,
                    date_posted: dates,
                    userid: userid,
                    answersStorage : answersStorage
                })
            })

        })


    })
}    