const {Info} = require('./../model/info')
const {conectar} = require('./../utils/utils')

conectar()

const getInfo = async (req, res) =>{
    let buscar = await Info.find()
    res.status(200).json(buscar)
}

module.exports={
    getInfo
}