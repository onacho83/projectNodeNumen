const { Router } = require("express");
const { check } = require("express-validator");

const {
  userGet,
  userOneGet,
  userPost,
  userPut,
  userDelete,
} = require("../controllers/user.controller");

const { existeEmail, existeId } = require("../helpers/customValidate");
const { validarCampos } = require("../middlewares/validarCampos");

const router = Router();

router.get("/", userGet);
router.get("/:id", userOneGet);
router.post(
  "/",
  [
    check("nombre", "El nombre tiene que ser obligatorio").not().isEmpty(),
    check("password", "El pasword no tiene que ser menor a 6 digitos").isLength(
      { min: 6 }
    ),
    check("email", "No es un email valido").isEmail(),
    check("email").custom(existeEmail),
    validarCampos,
  ],
  userPost
);
router.put(
  "/:id",
  [
    check("id", "no es un id valido").isMongoId(),
    check("id", "el id no exite").custom(existeId),
    validarCampos,
  ],
  userPut
);
router.delete(
  "/:id",
  [
    check("id", "no es un id valido").isMongoId(),
    check("id", "el id no exite").custom(existeId),
    validarCampos,
  ],
  userDelete
);

module.exports = router;
