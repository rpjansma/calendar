'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://db_user:dbpassword@calendar.xrt8t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

//Models load
const Event = require('./models/eventModel.js')
const User = require('./models/userModel.js')

//Routes load
const indexRoutes = require('./routes/indexRoute')
const eventsRoutes = require('./routes/eventsRoute')
const usersRoutes = require('./routes/usersRoute')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoutes);
app.use('/events', eventsRoutes);
app.use('/users', usersRoutes);


module.exports = app;