const mongoose = require("mongoose"); // importando el componente mogoose
const musicaSchema = mongoose.Schema({
    nombreCancion: {
        type: String,
        required: true,
    },
    artista: {
        type: String,
        required: true,
    },
    album: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        required: true,
    },
    fechaLanzamiento: {
        type: Date,
        requiered: true,
    },
    duracion: {
        type: Number,
        required: true,
    },
    valoracion: {
        type: Number,
        required: true,
    }
});
module.exports = mongoose.model("Musica", musicaSchema);
