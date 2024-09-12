var express = require('express');
var app = express();
const PORT = 5000;

// Imported Data
const peopleData = require('./data/people');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Use res.render to load up an ejs view file

// Index page
app.get("/", function(req, res) {
    // let people = []
    let judgement = "Nerds will inherit the earth"
    res.render('pages/index', {
        people: peopleData,
        tagline: judgement,
    })
})

// About page
app.get('/about', function(req, res) {
    res.render('pages/about')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})