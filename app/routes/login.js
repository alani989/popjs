module.exports = function(app, db, bcrypt, promise, alert) {

    var enteredData = [];

    app.post('/login', function(req, res) {
        var userid;
        var username = req.body.userName;
        var password = req.body.password;
        var output = { username: username, password: password };
        db.user.findOne({ where: { username: username } }).then(function(data) {
            if (data == null) {
                alert('Username not found')
                res.redirect('/')
            } else if (data != undefined) {
                var passmatch = bcrypt.compareSync(password, data.dataValues.password);
                if (passmatch) {
                    userid = data.dataValues.id;
                    res.redirect('/loadProfile/'+userid)
                } else if (!passmatch) {
                    alert('Passwords do not match')
                    res.redirect('/')
                }
            }
        })
    })
}