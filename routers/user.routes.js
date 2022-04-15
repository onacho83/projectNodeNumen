const { Router } = require("express");
const {
  userGet,
  userOneGet,
  userPost,
  userPut,
  userDelete,
} = require("../controllers/user.controller");

const router = Router();

router.get("/", userGet);
router.get("/:id", userOneGet);
router.post("/", userPost);
router.put("/:id", userPut);
router.delete("/", userDelete);

module.exports = router;
