const express = require("express");
const mongoose = require("mongoose");
const app = express();
const usuarioRouter = require("./routes/usuario.route");
const recursoRouter = require("./routes/recurso.route");

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*Conexión con MongoDB */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

//CORS configuration
const cors = require("cors");
app.use(cors());

/**Endpoints */
app.use("/recursos", recursoRouter);

/*Definimos en qué puerto está funcionando el servidor */
app.listen(process.env.PORT || 5050, () => {
  console.log(`Servidor iniciado en puerto ${5050}`);
});
