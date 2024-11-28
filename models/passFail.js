import PassFail from '../schemas/passFail.js';

class passFailModel {
  async create(passFail) {
    return await PassFail.create(passFail);
  }
  
  async createMany(passFails) {
    return await PassFail.insertMany(passFails);
  }

  async delete(id) {
    return await PassFail.findByIdAndDelete({_id: new mongoose.Types.ObjectId(id) });
  }


  async getAll() {
    return await PassFail.find();
  }

  async getOne(id) {
    return await Mascota.findById(id);
  }
}

export default new passFailModel;