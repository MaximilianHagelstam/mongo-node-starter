import express from 'express';
import personController from '../controllers/personController.js';

const personRouter = express.Router();

personRouter.get('/', personController.showAll);
personRouter.post('/', personController.add);

export default personRouter;
