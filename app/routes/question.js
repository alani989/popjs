module.exports = function (app, db) {

    app.post('/question/:id', (req, res) => {
        var title = req.body.title;
        var content = req.body.content;
        var category = req.body.category;
        var userid = req.params.id;
        
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        db.question.create({
            title: title,
            content: content,
            category: category,
            userid: userid,
            posted_date: today,
        })

        db.question.sync().then(function () {
            res.redirect('/loadProfile/'+userid)
        })
    })


}