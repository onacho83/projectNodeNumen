require("dotenv").config();

const Server = require("./server/server");

const servidor = new Server();

servidor.listen();
