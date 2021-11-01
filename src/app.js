<<<<<<< HEAD
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

import connectDb from './utils/connectDb.js';
import personRoutes from './routes/personRoutes.js';
=======
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const connectDb = require('./utils/connectDb');
const personRoutes = require('./routes/personRoutes');
>>>>>>> facabbc9aee0676c86bffbd01d53d8313fbce71e

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());

connectDb();

app.use('/api/persons', personRoutes);

module.exports = app;
