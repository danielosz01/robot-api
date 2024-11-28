import express from 'express';
const route = express.Router();
import passFailController from '../controllers/passFail.js';

route.post('/', passFailController.create);
route.get('/:id', passFailController.getOne);
route.get('/', passFailController.getAll);
route.put('/:id', passFailController.update);
route.delete('/:id', passFailController.delete);

export default route;