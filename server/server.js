const express = require('express')
const socketIO = require('socket.io')
const http = require('http')

const path = require('path')

const app = express()
//socket.io no trabaja con express pero si con http
let server = http.createServer(app)

//creamos el path de nuestra carpeta publica
const publiPath = path.resolve(__dirname, '../public')
const port = process.env.PORT || 3000

//middleware que nos deja usar la carpeta publica para acceder al sitio
app.use(express.static(publiPath))

// io = es la comuncacion del backend
module.exports.io = socketIO(server)
require('./sockets/socket')


server.listen(port, (err) => {
    if(err) throw new Error(err)

    console.log(`Servidor corriendo en el puerto ${port}`)
})