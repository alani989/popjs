const login = require('./login');
const signup = require('./signup');
const question = require('./question');

module.exports = function(app,db, bcrypt,promise) {
    question(app,db,bcrypt);
    signup(app,db,bcrypt);
    login(app,db,bcrypt,promise);
}