'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CliforSchema = new Schema({
    nmClifor: {
        type: String,
        required: 'Nome obrigatório'
    },
    cpfCnpj: {
        type: String,
        required: 'CPF/CNPJ obrigatório'
    },
    stAtivo: {
        type: [{
            type: String,
            enum: ['S', 'N']
        }],
        default: ['S']
    },
    dtRecord: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Clifor', CliforSchema);
