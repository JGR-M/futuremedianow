const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();


// express middlewere
app.engine('handlebars', exphbs({defaultLayout: 'main'})); // <== added {defaultLayout: "main"}
app.set('view engine', 'handlebars');

// how to add images
app.use(express.static('public'));    // to add images in site,, must use this


// ================================================= routes ==

app.get('/', (req, res) => {
    res.render('index');
});


// ================================================= routes ==



// when deloying to heroku dd this line
const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log(`server running on port ${port}`)
});