const mongoose = require("mongoose");

const mongoCNN = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN);
    console.log("base de datos conectada");
  } catch (error) {
    console.log(error);
    throw new Error("No se conecta la base de datos");
  }
};

module.exports = mongoCNN;
