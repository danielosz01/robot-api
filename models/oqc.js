import Oqc from '../schemas/oqc.js';

class oqcModel {
  async create(oqc) {
    return await Oqc.create(oqc);
  }
  
  async createMany(oqcs) {
    return await Oqc.insertMany(oqcs);
  }

  async delete(id) {
    return await Oqc.findByIdAndDelete({_id: new mongoose.Types.ObjectId(id) });
  }


  async getAll() {
    return await Oqc.find();
  }

  async getOne(id) {
    return await Oqc.findById(id);
  }
}

export default new oqcModel;