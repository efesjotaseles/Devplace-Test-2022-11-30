const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 *@rol común o premium. Por default se asigna común
 */
const UsuarioSchema = new Schema(
{
    username:{type: String, required: true},
    email:{type: String, required: true},
    rol:{type: String, default: "común"}
},
{collection: "2022-11-30-UsuariosTest"}
);

module.exports = mongoose.model('usuario', UsuarioSchema);