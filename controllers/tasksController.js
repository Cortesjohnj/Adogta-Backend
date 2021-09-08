Pet = require("../models/Pet");
mongoose = require("mongoose");

const listPets = async (req, res, next) => {
  try {
    const pets = await Pet.find({ foundation_id: req.params.id });
    res.status(200).json(pets);
  } catch (e) {
    return next(e);
  }
};

const destroy = async (req, res, next) => {
  //testing delete option
  try {
    await Pet.deleteOne({ _id: req.params.id });
    res.status(204).end();
  } catch (e) {
    return next(e);
  } finally {
    //mongoose.disconnect();
  }
};

module.exports = {
  destroy,
  listPets,
};
