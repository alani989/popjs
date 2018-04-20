const login = require('./login');
const signup = require('./signup');
const question = require('./question');
const loadProfile = require('./loadProfile');
const answer = require('./answers');
const postAnswer = require('./postAnswer');


module.exports = function (app, db, bcrypt, promise, alert) {
    question(app, db, bcrypt);
    signup(app, db, bcrypt, alert);
    login(app, db, bcrypt, promise, alert);
    loadProfile(app, db);
    answer(app,db);
    postAnswer(app,db);
}