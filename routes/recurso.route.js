const express = require("express");
const router = express.Router();
const {
  findById,
  create,
  updateById,
  deleteById,
} = require("../controllers/recurso.controller");
//const url = '/recursos';

/**Pasando un id por parámetro se retorna un json con el recurso correspondiente en la base de datos */
router.get("/:id", findById);

/**En el body de esta request POST se pasa el json del recurso a crear en la base de datos */
router.post("/", create);

/**Actualiza el recurso pasado por body, identificándolo por el id pasado por parámetro */
router.put("/:id", updateById);

router.delete("/", deleteById);

module.exports = router;
