import mongoose from 'mongoose';
import { MONGO_URI } from './config.js';
import logger from './logger.js';

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

export default connectDb;
