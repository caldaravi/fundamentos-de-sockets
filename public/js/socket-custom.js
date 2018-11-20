var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', function() {
    console.log('Conexión perdida con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Carlos',
    mensaje: 'test'
}, function(resp) {
    console.log('respuesta servidor: ', resp);
});

// Escucha información
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});