module.exports = function (app, db, bcrypt, promise, alert) {

    var enteredData = [];

    app.post('/login', function (req, res) {
        var userid;
        var username = req.body.userName;
        var password = req.body.password;

        var firstMethod = new promise(function (resolve, reject) {
            db.user.findOne({ where: { username: username } }).then(user => {
                userid = user.dataValues.id;
            })
            if (username == null) {
                reject('No username')
            } else {
                enteredData = [username, password]
                resolve(enteredData)
            }
        })


        firstMethod.then(function (data) {
            var x = db.user.findOne({ where: { username: data[0] } })
            return x;
        }).then(function (search) {
            return (search.dataValues.password);
        }).then(function (pass) {
            var passMatch = bcrypt.compareSync(enteredData[1], pass);
            if (passMatch) {
                console.log('Passwords match')
                console.log(pass)
                res.redirect('/loadProfile/'+userid)
                if (username == null) {
                    reject('No username')
                } else {
                    enteredData = [username, password]
                    resolve(enteredData)
                }
            } else {
                alert('Passwords do not match')
                res.render('signup')
            }
        }).catch(function (err) {
            if (err) {
                console.log('error')
            }
        })

    })

}