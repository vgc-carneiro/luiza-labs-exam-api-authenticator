require('./config/log');
const config = require('./config/env');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// router
const authRouter = require('./components/routes/authRoute');

const app = express();

app.set('view engine', 'ejs');

if (config.app.env != 'prod') {
	app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', authRouter);

module.exports = app;