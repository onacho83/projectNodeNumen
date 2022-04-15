const User = require("../models/user.model");

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

const userPost = async (req, res) => {
  const user = new User(req.body);

  await user.save();

  res.status(202).json({
    msg: "Felicitaciones Post",
    usuario: user,
  });
};

const userPut = async (req, res) => {
  const { id } = req.params;
  const userBody = req.body;
  const userUpdate = await User.findByIdAndUpdate(id, userBody, { new: true });
 

  res.status(202).json(userUpdate);
};

const userDelete = (req, res) => {
  res.status(202).json({
    msg: "Felicitaciones Delete",
  });
};

module.exports = {
  userGet,
  userOneGet,
  userPost,
  userPut,
  userDelete,
};
