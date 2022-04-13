const userGet = (req, res) => {
  res.status(202).json({
    msg: "Felicitaciones",
  });
};
const userPost = (req, res) => {
  res.status(202).json({
    msg: "Felicitaciones Post",
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
