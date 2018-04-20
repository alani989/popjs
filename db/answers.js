'use strict'
module.exports = (db, Sequelize) => {
    
    var answer = db.define('answers', {
        content: Sequelize.TEXT,
        questionid: Sequelize.INTEGER,
        userid: Sequelize.INTEGER,
        posted_date: Sequelize.DATE,
    }, {
            timestamps: false,
            freezeTableName: true
        }, {})

    return answer;
};




