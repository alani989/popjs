app.get('/dash', function(req,res){
    res.render('dash');
})

app.get('/dash1', function(req, res) {
    res.render('dash1');
})
app.post('/dash6', function(req, res) {
    let title = req.body.title;
    let category = 'frontend'
    db.none('insert into questions (title, category) values ($1,$2) ', [title, category]).then(function(){ 
    res.redirect('/dash6')
    })
})

app.post('/dash7', function(req, res) {
    let title = req.body.title;
    let category = 'backend'
    db.none('insert into questions (title, category) values ($1,$2) ', [title, category]).then(function(){ 
    res.redirect('/dash7')
    })
})

app.post('/dash8', function(req, res) {
    let title = req.body.title;
    let category = 'database'
    db.none('insert into questions (title, category) values ($1,$2) ', [title, category]).then(function(){ 
    res.redirect('/dash8')
    })
})

app.post('/dash9', function(req, res) {
    let title = req.body.title;
    let category = 'git'
    db.none('insert into questions (title, category) values ($1,$2) ', [title, category]).then(function(){ 
    res.redirect('/dash9')
    })
})

app.post('/dash10', function(req, res) {
    let title = req.body.title;
    let category = 'other'
    db.none('insert into questions (title, category) values ($1,$2) ', [title, category]).then(function(){ 
    res.redirect('/dash10')
    })
})

app.post('/answers', function(req, res){
   
	let content = req.body.content;
	let title = req.body.title;
	let userid = req.body.userid;

	console.log(content, title, userid);

    db.none('insert into questions (content,title,userid) values ($1,$2,$3) ', [content,title, userid]).then(function(){
        db.any('SELECT * FROM questions').then(function(data) {
            res.render('answers', {'questions' : data})
        })
    })
})

app.get ('/answers', function(req, res) {
	db.any('SELECT * FROM questions').then(function(data){
        res.render('answers', {'questions' : data});
    })
})

app.get('/dash2', function(req, res) {
    res.render('dash2');
})
app.get('/dash3', function(req, res) {
    res.render('dash3');
})
app.get('/dash4', function(req, res) {
    res.render('dash4');
})
app.get('/dash5', function(req, res) {
    res.render('dash5');
})

app.get('/dash6', function(req, res){
    db.any('SELECT * FROM questions').then(function(data) {
        res.render('dash6', {'questions' : data});
    })
})

app.get('/dash7', function(req, res){
    db.any('SELECT * FROM questions').then(function(data) {
        res.render('dash7', {'questions' : data});
    })
})
app.get('/dash8', function(req, res){
    db.any('SELECT * FROM questions').then(function(data) {
        res.render('dash8', {'questions' : data});
    })
})
app.get('/dash9', function(req, res){
    db.any('SELECT * FROM questions').then(function(data) {
        res.render('dash9', {'questions' : data});
    })
})
app.get('/dash10', function(req, res){
    db.any('SELECT * FROM questions').then(function(data) {
        res.render('dash10', {'questions' : data});
    })
})



app.get('/',function(req, res){
    res.send('hello world');
})