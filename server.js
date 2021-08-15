const express = require('express')
var socket = require('socket.io')



var app = express()
app.use(express.static('public'))

var server = app.listen(3000, () => {
    console.log("Hi")
})

var io = socket(server)

io.on('connection', function(socket){
    console.log("connected")

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data)
    })
})