import mongoose from 'mongoose';
import { MONGO_URI } from './config.js';
import logger from './logger.js';

const connectDb = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      logger.info('Connected to database');
    })
    .catch((err) => {
      logger.error(err);
    });
};

export default connectDb;
