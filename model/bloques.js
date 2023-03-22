const mongoose = require('mongoose')

const bloquesSchema = new mongoose.Schema(
    { texto : String , src : String},
    { collection : 'bloques' }
)

const Bloques = mongoose.model('Bloques', bloquesSchema)


module.exports = {
    Bloques
}