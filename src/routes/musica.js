const express = require("express");
const router = express.Router();
const Musica = require("../models/musica"); // Cambio en la importación del modelo

//Nuevo animal
router.post("/musica", (req, res) => {
    const nuevaCancion = new Musica(req.body); // Crear una nueva instancia de Musica con los datos del cuerpo de la solicitud
    nuevaCancion.save() // Guardar la nueva canción en la base de datos
        .then((data) => res.json(data)) // Responder con los datos de la nueva canción y código de estado 201 (creado)
        .catch((error) => res.json({ message: error })); // Manejar errores y responder con un mensaje de error y código de estado 400 (error de solicitud)
});

//Consultar todas las canciones
router.get("/musica", (req, res) => {
    Musica.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar una canción por su id
router.get("/musica/:id", (req, res) => {
    const { id } = req.params;
    Musica
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de una canción por su id
router.put("/musica/:id", (req, res) => {
    const { id } = req.params;
    const { nombreCancion, artista, album, genero, fechaLanzamiento, duracion, valoracion } = req.body;
    Musica
        .updateOne({ _id: id }, {
            $set: { nombreCancion, artista, album, genero, fechaLanzamiento, duracion, valoracion }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar una canción por su id

router.delete("/musica/:id", (req, res) => {
    const { id } = req.params;
    Musica
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});



module.exports = router;
