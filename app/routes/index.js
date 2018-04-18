const question = require('./question');
const signup = require('./signup');

module.exports = function(app,db) {
    question(app,db);
    signup(app,db);
}