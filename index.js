// get express module
const exp = require('constants');
const express = require('express');

const dotenv = require('dotenv').config();

// get path module
const path = require('path');

// create an express app
const app = express();

// set port for the server
const port = process.env.PORT || 3000;

// set path for views
app.set("views", path.join(__dirname, "views"));

// console.log(path.join(__dirname, "hello"));

// set path for static file like css, js and images
app.use(express.static(path.join(__dirname, "public")));

// set template engine
app.set("view engine", "pug");

app.use(express.urlencoded( {extended: true} ));
app.use(express.json());

const mainRoutes = require('./routes/mainRoute');

// user mainRoute.js file to handle request
// which starts with /
app.use("/", mainRoutes)


app.listen(port, () => {

    console.log(`Server running on  http://localhost:${port}`);

});



