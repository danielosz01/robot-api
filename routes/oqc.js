import express from 'express';
const route = express.Router();
import oqcController from '../controllers/oqc.js';
import swaggerJSDoc from 'swagger-jsdoc';

/** 
* @swagger
* /oqc:
*   post:
*     summary: Create a new oqc record
*     tags: [oqc]
*     requestBody:  
*       required: true      
*       content:
*           application/json:
*               schema:
*                   type: array
*                   items:
*                       $ref: '#/components/schemas/Oqc'

*     responses:  
*       201:
*         description: Successfully created
*         content:
*           application/json:
*               schema:
*                   type: array
*                   items:
*                       $ref: '#/components/schemas/Oqc'

*       500:
*         description: Some server error
*
*/
route.post('/', oqcController.create);
//route.get('/:id', oqcController.getOne);
//route.get('/', oqcController.getAll);
route.put('/:id', oqcController.update);
route.delete('/:id', oqcController.delete);

export default route;