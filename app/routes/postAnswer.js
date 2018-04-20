module.exports = function (app, db) {

    app.post('/postAnswer/:id?', function (req, res) {
        var content = req.body.content;
        var questionid = req.params.id;
        var userid = req.query.xyz;

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        db.answer.create({
            content: content,
            questionid: questionid,
            userid: userid,
            posted_date: today
        }).then(function () {
            db.answer.sync().then(function () {
                res.redirect('/loadProfile/' + userid)
            })
        })


    })
}