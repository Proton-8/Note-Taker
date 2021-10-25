// Standard cut and paste Express.js stuff
const express = require('express');
const path = require('path');
const routes = require('./routes');



// use default port or 3001
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);
