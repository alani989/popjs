'use strict'
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