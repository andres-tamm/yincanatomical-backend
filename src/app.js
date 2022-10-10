const express = require('express');
const cors = require('cors');
const api = require('./api/index.js')
const app = express();

app.use(cors({ origin: process.env.ORIGIN || 'http://localhost:3000' }));

const developmentMode = app.env === 'development';
const testMode = app.env === 'test';

app.use('/api', api);

module.exports = app;

