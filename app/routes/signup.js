module.exports = function(app,db, bcrypt) {

    app.post('/signup', (req, res) => {
        var username = req.body.userName;
        var email = req.body.email;
        bcrypt.hash(req.body.password, 5, function(err, encryptedData) {
            if (err) {
                console.error(err)
            } else {
                db.user.create({
                    username: username,
                    password: encryptedData,
                    email: email
                })
            }
        })
    
        db.user.sync().then(function() {
            res.render('signup')
        })
    })

    app.get('/signup'), (req,res) => {
        res.render('signup')
    }
}