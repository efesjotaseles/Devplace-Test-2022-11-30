const { Recurso } = require("../models/Recurso.model");

/**Retorna UN recurso de la base de datos
 * @id El id buscado
 */
const findById = async (req, res) => {
  const { id } = req.params;
  const recurso = await recurso.findById(id);
  res.json(recurso);
};

/**Crea un recurso nuevo en la base de datos
 * @body El json del recurso se pasa por el body de la request
 */
const create = async (req, res) => {
  const recur = new Recurso(req.body);
  recur.save();
  res.json(recur);
};

/**Actualiza un recurso en la base de datos
 * @id Pasada por parámetro
 * @body El json del recurso se pasa por el body de la request
 */
const updateById = async (req, res) => {
  const { id } = req.params;
  await recurso.updateOne({ _id: id }, req.body);
  res.json({ message: "Recurso modificado" });
};

/**Elimina un recurso en la base de datos
 * @id Pasada por parámetro
 */
const deleteById = async (req, res) => {
  const { id } = req.params;
  await recurso.remove({ _id: id });
  res.json({ message: "Recurso eliminado" });
};

module.exports = {findById, create, updateById, deleteById}