
require('dotenv').config()
const express = require('express')
const app = express()
const yargs   = require('yargs').argv
const cors = require('cors')
const router = require('./router/router')

let {} = yargs
let { PORT } = process.env

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false })) 


app.use(router)

app.listen( PORT, ()=>{
    console.log('Iniciando api en Express')
})