const { response } = require("express");
const { request } = require("express");
const bcryptjs = require("bcryptjs");
const axios = require("axios").default;

const User = require("../models/user.model");
const res = require("express/lib/response");

const userGet = async (req, res) => {
  const usuarios = await User.find();

  res.status(202).json(usuarios);
};

const userOneGet = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(202).json({
    user,
  });
};

const userPost = async (req = request, res = response) => {
  const { nombre, password, email } = req.body;
  const user = new User({ nombre, password, email });

  //encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  //Guardar en base de datos
  await user.save();

  res.status(202).json({
    msg: "Felicitaciones Post",
    usuario: user,
  });
};

const userPut = async (req, res) => {
  const { id } = req.params;
  const { _id, password, ...userBody } = req.body;

  if (password) {
    const salt = bcryptjs.genSaltSync();
    userBody.password = bcryptjs.hashSync(password, salt);
  }

  //utilizo la opción {new:true} para mostrar el usuario con los valores actualizados
  const userUpdate = await User.findByIdAndUpdate(id, userBody, { new: true });

  res.status(202).json(userUpdate);
};

const userDelete = async (req, res) => {
  const { id } = req.params;

  //eliminar de la base de datos
  //const userDelete = await User.findByIdAndDelete(id);

  //cambio a estado falso
  const userUpdate = await User.findByIdAndUpdate(
    id,
    { estado: false },
    { new: true }
  );

  res.status(202).json(userDelete);
};

const llamadaAxios = async (req, res) => {
  const { lugar } = req.params;

  const instancia = axios.create({
    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?`,
    params: {
      access_token:
        "pk.eyJ1Ijoib25hY2hvODMiLCJhIjoiY2tybmZtcDU2MXRqYzJwa2Q2d3FvYTY5ZyJ9.80zFtMEBS3lWR-Fzi7-X9g",
      limit: 3,
      language: "es",
    },
  });
  const respuesta = await instancia.get().catch((err) => {
    err.origin = "error en la URL";
    throw err;
  });
  console.log(respuesta.data);
  res.status(200).json(respuesta.data);
};
module.exports = {
  userGet,
  userOneGet,
  userPost,
  userPut,
  userDelete,
  llamadaAxios,
};
