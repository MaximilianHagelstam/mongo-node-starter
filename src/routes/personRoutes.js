import express from 'express';
import { body } from 'express-validator';
import personController from '../controllers/personController.js';

const personRouter = express.Router();

personRouter.get('/', personController.findAll);
personRouter.post(
  '/',
  body('name').isString(),
  body('number').isString(),
  personController.add,
);
personRouter.get('/:id', personController.findId);
personRouter.delete('/:id', personController.deleteId);
personRouter.patch('/:id', personController.updateId);

export default personRouter;