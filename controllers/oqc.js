import oqcModel from '../models/oqc.js';
class oqcController {
    constructor() {
        this.oqcController = [];
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
              result = await oqcModel.createMany(data);
          } else {
              // Si es un solo objeto, utiliza create
              result = await oqcModel.create(data);
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
          const data = await oqcModel.delete(id);
          res.status(201).json({ message: 'Deleted' });
        } catch (error) {
          res.status(500).send(error);
      }
    }
    async getOne(req, res) {
        try {
          const {id} = req.params;
          const data = await oqcModel.getOne(id);
          res.status(201).json(data);
        } catch (error) {
          res.status(500).send(error);
      }
    }
    async getAll(req, res) {
        try {
          const data = await oqcModel.getAll();
          res.status(201).json(data);
        } catch (error) {
          res.status(500).send(error);
      }
  }


}

export default new oqcController();