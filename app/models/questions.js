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

    var question = db.define('questions', {
        title: Sequelize.STRING,
        content: Sequelize.TEXT,
        category: Sequelize.STRING,
        userid: Sequelize.INTEGER,
        posted_date: Sequelize.DATE
    },
        {
            timestamps: false,
            freezeTableName: true
        }, {});

    return question;
}


