import express from 'express';
import morgan from 'morgan';
import personRoutes from './routes/personRoutes.js';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/persons', personRoutes);

export default app;
