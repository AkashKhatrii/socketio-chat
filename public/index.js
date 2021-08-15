
var socket = io.connect("http://localhost:3000")

var messages = document.getElementById('messages'),
    userName = document.getElementById('username'),
    message = document.getElementById('message'),
    btn = document.getElementById('send')


btn.addEventListener('click', function(){

    socket.emit('chat', {
        message: message.value,
        name: userName.value
    })

    message.value = ''
    userName.value = ''
})

socket.on('chat', (data) => {
    messages.innerHTML += "<p><strong>" + data.name + ": </strong>" + data.message + "</p>"
})