const express = require("express");
const cors = require("cors");
const userRoutes = require("../routers/user.routes");
const mongoCNN = require("../database/mongoCnn");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.path = {
      user: "/api/user",
    };

    this.middleware();
    this.routes();
    this.databaseCNN();
  }

  async databaseCNN() {
    await mongoCNN();
  }

  middleware() {
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.path.user, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor escuchando en http://localhost:" + this.port);
    });
  }
}

module.exports = Server;
