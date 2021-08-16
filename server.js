const express = require('express')
var socket = require('socket.io')



var app = express()
app.use(express.static('public'))

var server = app.listen(3000, () => {
    console.log("Listening on port 3000")
})

var io = socket(server)

io.on('connection', function(socket){
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data)
    })
})