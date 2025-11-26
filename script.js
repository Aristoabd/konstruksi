const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    
    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const content = `<p>${text}</p><span class="time">${timeString}</span>`;
    messageDiv.innerHTML = content;
    
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleSend() {
    const text = userInput.value.trim();
    if (text === "") return;

    addMessage(text, true);
    userInput.value = '';

    setTimeout(() => {
        const responses = [
            "Saya mengerti, itu pasti berat untukmu.",
            "Ceritakan pelan-pelan, saya di sini mendengarkan.",
            "Tarik napas dalam... kamu aman di sini.",
            "Terima kasih sudah berani terbuka."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addMessage(randomResponse, false);
    }, 1500); 
}

sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
});