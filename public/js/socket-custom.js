var socket = io();
        
socket.on('connect', function(){
    console.log('Conectado al servidor')
})

socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor')
})
//emite un mensaje
/*socket.emit('enviarMensaje', {
    usuario : 'Rodolfo Figueroa',
    mensaje : 'Hola Mundo'
}, function(resp){
    console.log('Respuesta servidor ', resp)
})*/
//escucha un mensaje
socket.on('enviarMensaje', function(mensaje){
    console.log('servidor: ', mensaje)
})