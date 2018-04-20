module.exports = function(app, db, bcrypt, alert) {
    
    app.post('/signup', (req, res) => {
        var username = req.body.userName;
        var email = req.body.email;
        bcrypt.hash(req.body.password, 5, function(err, encryptedData) {
            if (err) {
                console.error(err)
            } else {
                db.user.findOne({ where: { username: username } }).then(function(data) {

                    if (data == undefined) {
                        db.user.create({
                            username: username,
                            password: encryptedData,
                            email: email
                        })

                        app.get('/signup'), (req, res) => {
                            res.render('signup')
                        }

                        db.user.sync().then(function() {
                            res.render('signup')
                        })

                    } else {

                        alert('Username taken')
                        res.redirect('/')
                    }
                })
            }
        })
    })
}