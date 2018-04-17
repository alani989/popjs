let express = require('express');
let bodyParser = require('body-parser');
let pg = require('pg');
let promise = require("bluebird");
const Sequelize = require('sequelize');

const PORT = 3000;

// set connection
const sequelize = new Sequelize('postgres://localhost:5432/pop');
// test connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
// model
const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
}, {
        timestamps: false
    });

// force: true will drop the table if it already exists
User.sync();


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.set("view engine", "ejs");

// posting data into user table
app.post('/api/new_user', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    User.create({
        username: username,
        password: password,
        email: email,
    });
    User.sync();
});

app.get('/', function (req, res) {
    res.render('userForm');
})

// getting data from user table
app.get('/users', function (req, res) {
    var usersList = [];
    var passwordsList = [];
    var emailsList = [];
    // User.findOne().then(users => {
    //     console.log(users)
    //     usersList.push(users.get("username"));
    //     passwordsList.push(users.get("password"));
    //     emailsList.push(users.get("email"));
    //     res.render('usersAll', {
    //         username: usersList,
    //         password: passwordsList,
    //         email: emailsList
    //     });
    // })
    User.findAll().then(users => {
        for (var i = 0; i < users.length; i++) {
            usersList.push(users[i].username);
            passwordsList.push(users[i].password);
            emailsList.push(users[i].email);
        }
        res.render('usersAll', {
            username: usersList,
            password: passwordsList,
            email: emailsList
        });
    })
});

// connect to port
app.listen(PORT, () => console.log('listening to port ' + PORT));