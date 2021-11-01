<<<<<<< HEAD
import mongoose from 'mongoose';

import { MONGO_URI } from './config.js';
import logger from './logger.js';
=======
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const logger = require('./logger');
>>>>>>> facabbc9aee0676c86bffbd01d53d8313fbce71e

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('Connected to database');
  } catch (err) {
    logger.error(err);
  }
};

module.exports = connectDb;
