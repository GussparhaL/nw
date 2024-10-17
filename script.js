document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    
    // Almacenar el mensaje en localStorage
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
    
    messageInput.value = ''; // Limpiar el campo de entrada
    displayMessages(); // Actualizar la visualización de mensajes
});

function displayMessages() {
    const messagesDisplay = document.getElementById('messagesDisplay');
    messagesDisplay.innerHTML = ''; // Limpiar mensajes anteriores
    
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach((msg, index) => {
        const messageElement = document.createElement('div');
        messageElement.textContent = msg;
        messagesDisplay.appendChild(messageElement);
    });
}

// Mostrar mensajes al cargar la página
window.onload = displayMessages;
