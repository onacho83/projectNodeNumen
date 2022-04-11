const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = 3000;
    this.path = {
      user: "/api/user",
    };

    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors());
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.status(202).json({
        msg: "Felicitaciones",
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor escuchando en http://localhost:" + this.port);
    });
  }
}

module.exports = Server;
