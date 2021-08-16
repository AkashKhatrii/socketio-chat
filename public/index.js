var userName;
var socket = io.connect("http://localhost:3000")
var heading = document.getElementById('heading'),
    messages = document.getElementById('messages'),
    message = document.getElementById('message'),
    btn = document.getElementById('send')

window.onload = () => {
    userName = prompt("Enter your handle: ")
    heading.innerText = `Hello ${userName}!`
}


function submit(){
    socket.emit('chat', {
        message: message.value,
        name: userName
    })

    message.value = ''
    message.focus
}

message.addEventListener("keydown", (e) => {

    if (e.which == 13){
        submit()
    }
})

btn.addEventListener('click', submit)

socket.on('chat', (data) => {
    messages.innerHTML += "<p><strong>" + data.name + ": </strong>" + data.message + "</p>"
})