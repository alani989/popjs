var express = require('express');
var router = express.Router();
var app = express();

router.get('/question', function(req, res) {
    res.render('question');
})

router.post('/question', function(req, res) {
    res.render('question');
})

module.exports = router;