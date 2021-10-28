import express from 'express';
import indexController from '../controllers/indexController.js';

const personRouter = express.Router();

personRouter.get('/', indexController.greeting);

export default personRouter;
