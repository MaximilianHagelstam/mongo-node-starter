import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8080;

const MONGO_URI =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGO_URI_PROD
    : process.env.MONGO_URI_DEV;

export { PORT, MONGO_URI };
