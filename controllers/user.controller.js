const User = require("../models/user.model");

const userGet = (req, res) => {
  res.status(202).json({
    msg: "Felicitaciones",
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

const userPut = (req, res) => {
  res.status(202).json({
    msg: "Felicitaciones Put",
  });
};

const userDelete = (req, res) => {
  res.status(202).json({
    msg: "Felicitaciones Delete",
  });
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userDelete,
};
