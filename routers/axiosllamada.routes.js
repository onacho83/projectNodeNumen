const { Router } = require("express");
const { llamadaAxios } = require("../controllers/user.controller");

const router = Router();

router.get("/:lugar", llamadaAxios);

module.exports = router;
