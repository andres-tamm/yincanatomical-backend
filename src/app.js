const express = require('express');
const cors = require('cors');
const session = require('express-session')

const app = express();

app.use(cors({ origin: process.env.ORIGIN || 'http://localhost:3000' }));

const developmentMode = app.env === 'development';
const testMode = app.env === 'test';

module.exports = app;

