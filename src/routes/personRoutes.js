<<<<<<< HEAD
import express from 'express';
import { body } from 'express-validator';

import personController from '../controllers/personController.js';
=======
const express = require('express');
const { body } = require('express-validator');
const personController = require('../controllers/personController');
>>>>>>> facabbc9aee0676c86bffbd01d53d8313fbce71e

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

module.exports = personRouter;
