const express = require("express");
const cors = require("cors");
const userRoutes = require("../routers/user.routes");
const axiosRouter = require("../routers/axiosllamada.routes");
const mongoCNN = require("../database/mongoCnn");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.path = {
      user: "/api/user",
      axios: "/api/axios",
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
    //lectura y parseo del body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.path.axios, axiosRouter);
    this.app.use(this.path.user, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor escuchando en http://localhost:" + this.port);
    });
  }
}

module.exports = Server;
