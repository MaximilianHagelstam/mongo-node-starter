import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDb from './utils/connectDb.js';
import personRoutes from './routes/personRoutes.js';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());

connectDb();

app.use('/api/persons', personRoutes);

export default app;
