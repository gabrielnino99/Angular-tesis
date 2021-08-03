const mongoose = require('mongoose');

const schema_adoptante = mongoose.Schema({
    nombre: {type: String, required: true},
    apellidos: {type: String, required: true},
    fecha_nacimiento:{type: Date, required: true},
    genero: {type: String, required: true},
    localidad: {type: String, required: true},
    correo: {type: String, required: true},
    num_celular: {type: String, required: true},
    contrasena: {type: String, required: true}
});

module.exports = mongoose.model('Adoptante', schema_adoptante);