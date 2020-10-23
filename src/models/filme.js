const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', { 
    titulo: {
        type: String,
        required: true,
    },
    atores: Array,
    ano: Number,
    detalhes: Object,
    premiacoes: [Object],
 });

 module.exports = Filme;