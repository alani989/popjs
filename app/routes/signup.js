module.exports = function(app,db) {
    app.post('/signup', (req,res) => {
        var username = req.body.userName;
        var password = req.body.password;
        var email = req.body.email;
        db.user.create({
            username: username,
            password: password,
            email: email
        })
    
        db.user.sync().then(function() {
            res.render('login')
        })
    })

    app.get('/signup'), (req,res) => {
        res.render('signup')
    }
}