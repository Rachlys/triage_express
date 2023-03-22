const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema(
    { color : String, colorTexto : String, texto : String, icon : String},
    { collection : 'info' }
)

const Info = mongoose.model('Info', infoSchema)

module.exports={
    Info
}