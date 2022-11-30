const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecursoSchema = new Schema(
  { idRecurso: Number, mensaje: String },
  { collection: "2022-11-30-RecursosTest" }
);

module.exports = mongoose.model('Recurso', RecursoSchema);