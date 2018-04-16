let express = require('express');
let bodyParser = require('body-parser');
let pg = require('pg');
const PORT = 3000;

// waiting database info, being created by Callum
let pool = new pg.Pool({
    port: 5432,
    host: 'localhost',
    database: 'pets',
    user: 'postgres',
    password: 'pets123',
    max: 10
});

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/api/new_question', function (req, res) {
    var qTitle = req.body.qTitle;
    var qContent = req.body.qContent;
    pool.connect((err, db, done) => {
        if (err) {
            return console.log(err);
        }
        else {
            // this will be in sequalize
            db.query('insert into pet (name,age) values ($1,$2)', [qTitle, qContent], (err, data) => {
                done();
                if (err) {
                    return console.log(err);
                } else {
                    console.log("Data Inserted");
                    db.end();
                }
            })
        }
    })
});

// connect to port
app.listen(PORT, () => console.log('listening to port ' + PORT));