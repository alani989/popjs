'use strict'
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