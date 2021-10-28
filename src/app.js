import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import indexRoutes from './routes/indexRoutes.js';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());

app.use('/api', indexRoutes);

export default app;
