module.exports = function (app, db, bcrypt,promise) {

    var enteredData = [];

    var firstMethod = new promise(function (resolve, reject) {
        app.post('/login', function (req, res) {
            var username = req.body.userName;
            var password = req.body.password;
            var output = { username: username, password: password };
            output = JSON.stringify(output)
            res.render('dashboard', {
                username: username
            });

            if (username == null) {
                reject('No username')
            } else {
                enteredData = [username, password]
                resolve(enteredData)
            }
        })
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
            if (username == null) {
                reject('No username')
            } else {
                enteredData = [username, password]
                resolve(enteredData)
            }
        } else {
            console.log('Passwords do not match')
        }
    }).catch(function (err) {
        if (err) {
            console.log('error')
        }
    })

}