// Importing required modules
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const path = require('path');
const serveStatic = require('serve-static');

/* Defining port */
const port = process.env.PORT || 9000;

/* Mongo DB */
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CHARACTERCREATOR, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database!'));

var charactersRouter = require('./routes/characters');

// Defining app
const app = express();

// Defining middlewares
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Static folder
app.use(serveStatic(__dirname + '/client/dist'));

/* Defining the Routes */
app.use('/characters', charactersRouter);

/* Listening to port */
app.listen(port);

module.exports = app;
