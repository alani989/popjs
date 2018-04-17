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
    
    var answer = db.define('answers', {
        content: Sequelize.TEXT,
        questionid: Sequelize.INTEGER,
        userid: Sequelize.INTEGER,
        posted_date: Sequelize.DATE,
        thumbs_up: Sequelize.INTEGER,
        thumbs_down: Sequelize.INTEGER
    }, {
            timestamps: false,
            freezeTableName: true
        }, {})

    return answer;
};




