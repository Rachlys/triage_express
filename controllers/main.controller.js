const { conectar } = require('../utils/utils')
conectar()

const { Bloques } = require('../model/bloques')
const { Columnas } = require('./../model/columnas')
const { Info } = require('./../model/info')


const getAll = async (req, res) =>{
    
    const array_info = []
    const bloques = await Bloques.find()
    const columnas = await Columnas.find()
    const info = await Info.find()

    array_info.push(bloques, columnas, info)


    res.status(200).json(array_info)

}


module.exports ={
    getAll
}