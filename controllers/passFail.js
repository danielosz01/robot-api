import passFailModel from '../models/passFail.js';
class passFailController {
    constructor() {
        this.passFailController = [];
    }   
/*
    async create(req, res) {
        try {
          const data = await passFailModel.create(req.body);
          res.status(201).json(data);
        } catch (error) {
          res.status(500).send(error);
      }
    }*/
    async create(req, res) {
      try {
          const data = req.body;
          let result;

          if (Array.isArray(data)) {
              // Si es un arreglo, utiliza createMany
              result = await passFailModel.createMany(data);
          } else {
              // Si es un solo objeto, utiliza create
              result = await passFailModel.create(data);
          }

          res.status(201).json(result);
      } catch (error) {
          res.status(500).send(error);
      }
    }

    async update(req, res) {
        try {
          res.status(201).json({ message: 'Updated' });
        } catch (error) {
          res.status(500).send(error);
      }
    }
    async delete(req, res) {
        try {
          const {id} = req.params;
          const data = await passFailModel.delete(id);
          res.status(201).json({ message: 'Deleted' });
        } catch (error) {
          res.status(500).send(error);
      }
    }
    async getOne(req, res) {
        try {
          const {id} = req.params;
          const data = await passFailModel.getOne(id);
          res.status(201).json(data);
        } catch (error) {
          res.status(500).send(error);
      }
    }
    async getAll(req, res) {
        try {
          const data = await passFailModel.getAll();
          res.status(201).json(data);
        } catch (error) {
          res.status(500).send(error);
      }
  }


}

export default new passFailController();