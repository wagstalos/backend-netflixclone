const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', { 
    titulo: String,
    tipo: String,
    capa:  String,
    logo:  String,
    thumb:  String,
    descrcao:  String,
    generos: Array,
    elenco: Array,
    cenas_momentos: Array,
 });

 module.exports = Filme;