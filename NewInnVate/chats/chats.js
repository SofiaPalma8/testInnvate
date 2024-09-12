document.getElementById('send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value;
 
    if (messageText.trim() !== "") {
        // Añadir el mensaje enviado por el usuario
        const messagesContainer = document.querySelector('.messages');
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'sent');
        userMessage.innerHTML = `<img src="https://via.placeholder.com/40" alt="You">
                                 <p>${messageText}</p>`;
        messagesContainer.appendChild(userMessage);
 
        // Limpiar el input
        messageInput.value = "";
 
        // Simular respuesta del servidor
        setTimeout(function() {
            const responseMessage = document.createElement('div');
            responseMessage.classList.add('message', 'received');
            responseMessage.innerHTML = `<img src="https://via.placeholder.com/40" alt="Abigail Lue">
                                         <p>Esta es una respuesta automática del servidor.</p>`;
            messagesContainer.appendChild(responseMessage);
        }, 1000);
    }
});
 
 