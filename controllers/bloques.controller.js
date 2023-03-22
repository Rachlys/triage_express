
const { Bloques } = require('../model/bloques')
const { conectar } = require('../utils/utils')
conectar()


const getBloques = async (req, res)=>{
    const buscar = await Bloques.find()
    res.status(200).json(buscar)
}



module.exports ={
    getBloques
}