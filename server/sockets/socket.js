const {io} = require('../server')

io.on('connection', (client)=>{
    console.log('Usuario conectado')

    client.emit('mensaje', {
        usuario : 'Administrador',
        mensaje : 'Bienvenido a ésta aplicación'
    })

    client.on('disconnect', ()=>{
        console.log('Usuario desconectado')
    })

    client.on('enviarMensaje', (mensaje, callback) => {

        console.log('Mensajes: ', mensaje)
        
        client.broadcast.emit('enviarMensaje', mensaje)
        
        /*if(mensaje.usuario){
            callback({
                resp: 'Todo Salió bien!'
            })
        }else{
            callback({
                resp: 'Todo Salió mal!!!!!!'
            })
        }*/
        
    })
})
