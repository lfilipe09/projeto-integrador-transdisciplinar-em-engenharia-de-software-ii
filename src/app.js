const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const { connect } = require('./db');
const routes = require('./routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Static frontend
app.use(express.static('public'));

// API routes
app.use('/api', routes);

// Health endpoint (also accessible via /api/health)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'projeto-integrador-ii', env: process.env.NODE_ENV || 'development' });
});

module.exports = app;
