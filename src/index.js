/*
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('¡Hola Mundo!!')
})

app.listen(port, () => {
    console.log('La aplicación se está ejecutando por el puerto ' + `${port}`);
})

*/

const parser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const musicaRoutes = require("./routes/musica");
const mongoose = require("mongoose");
require('dotenv').config();
app.use(parser.urlencoded({ extended: false })); //permite leer los datos que vienen en la petición
app.use(parser.json()); // transforma los datos a formato JSON
//Gestión de las rutas usando el middleware
app.use("/api", musicaRoutes);
app.use(express.json());
//Conexión a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));
//Conexión al puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
