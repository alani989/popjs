'use strict'
var Sequelize = require('sequelize')
var db = new Sequelize('postgres://localhost:5432/pop')

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = (db, Sequelize) => {

    var user = db.define('users', {
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING
    }, {
        timestamps: false,
        freezeTableName: true
    }, {})

    return user;
}