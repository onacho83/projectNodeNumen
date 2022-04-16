const User = require("../models/user.model");

const existeEmail = async (email) => {
  const correoExiste = await User.findOne({ email });
  if (correoExiste) {
    throw new Error("el email ya está registrado");
  }
};
const existeId = async (id) => {
  const idValido = await User.findById(id);
  if (!idValido) {
    throw new Error("el id no se encuentra registrado");
  }
};

module.exports = {
  existeEmail,
  existeId,
};
