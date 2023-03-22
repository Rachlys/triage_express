const mongoose = require('mongoose')

const columnasSchema = new mongoose.Schema(
    { titulo : String, parrafo : String, icono : String , movil: Object , color : String },
    { collection : 'columnas'}
)

const Columnas = mongoose.model('Columnas', columnasSchema)

module.exports = {
    Columnas
}