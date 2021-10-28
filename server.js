// Standard cut and paste Express.js stuff
const express = require('express');
const path = require('path');
const routes = require('./routes/api');
const html = require('./routes/htmlRoutes');

const app = express();

// use default port or 3002
const PORT = process.env.PORT || 3002;



// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);
app.use('/', html);


app.use(express.static(path.join(__dirname, 'public')));

// if all good, list the location
app.listen(PORT, function(){
    console.log(`Listening on: http://localhost:${PORT}`);
});