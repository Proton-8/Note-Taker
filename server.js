// Standard cut and paste Express.js stuff
const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const html = require('./routes/htmlRoutes');

const app = express();

// use default port or 3001
const PORT = process.env.PORT || 3001;



// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);
app.use('/', html);


app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, function(){
    console.log(`Listening on: http://localhost:${PORT}🚀`);
});