const { model, Schema } = require("mongoose");

const UserSchema = Schema({
  nombre: {
    type: String,
    required: [true, "este campo es requerido"],
  },
  password: {
    type: String,
    required: [true, "la contraseña es obligatoria"],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  email: {
    type: String,
    required: [true, "este campo es obligatorio"],
    unique: true,
  },
});

module.exports = model("User", UserSchema);
