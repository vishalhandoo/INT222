const socket = io()
let name1;
let textarea=document.querySelector('#textarea');

let messageArea = document.querySelector('.message_area')

do{
    name1 = prompt("Please enter your Name : ");
}while(!name1)

textarea.addEventListener('keyup',(e) =>{
    if(e.key==='Enter'){
        sendMessage(e.target.value)
    }
})


function sendMessage(message){
    let msg = {
        user: name1,
        message: message
    }

    appendMessage(msg, 'outgoing')
    textarea.value=''

    socket.emit('message',msg)

}

function appendMessage(msg,type){
    let mainDiv = document.createElement('div')
    let className= type
    mainDiv.classList.add(className,'message')

    let markUp=`
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markUp

    messageArea.appendChild(mainDiv)
}



socket.on('message',(msg) =>{
    appendMessage(msg,'incoming')
})