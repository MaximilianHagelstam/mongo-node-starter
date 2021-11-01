import express from 'express';
import personController from '../controllers/personController.js';

const personRouter = express.Router();

personRouter.get('/', personController.findAll);
personRouter.post('/', personController.add);
personRouter.get('/:id', personController.findId);
personRouter.delete('/:id', personController.deleteId);
personRouter.patch('/:id', personController.updateId);

export default personRouter;
