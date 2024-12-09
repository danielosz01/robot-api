import express from 'express';
const route = express.Router();
import passFailController from '../controllers/passFail.js';
import swaggerJSDoc from 'swagger-jsdoc';

/** 
* @swagger
* /pass-fail:
*   post:
*     summary: Create a new pass/fail record
*     tags: [pass/fail]
*     requestBody:  
*       required: true      
*       content:
*           application/json:
*               schema:
*                   type: array
*                   items:
*                       $ref: '#/components/schemas/PassFail'

*     responses:  
*       201:
*         description: Successfully created
*         content:
*           application/json:
*               schema:
*                   type: array
*                   items:
*                       $ref: '#/components/schemas/PassFail'

*       500:
*         description: Some server error
*
*/
route.post('/', passFailController.create);
route.get('/:id', passFailController.getOne);
route.get('/', passFailController.getAll);
route.put('/:id', passFailController.update);
route.delete('/:id', passFailController.delete);

export default route;