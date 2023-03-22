/* Para empezar a hacer las funciones de las peticiones, necesitamos mongoose y el modelo */
const { Columnas } = require('./../model/columnas')

/* Conectamos con mongoose */
const { conectar } = require('../utils/utils')
conectar()

/* Función de solicitar alumnos usando la función find */
const getColumnas = async (req, res)=>{
    const buscar =  await Columnas.find()
    res.status(200).json(buscar)
}



module.exports = {
    getColumnas
}