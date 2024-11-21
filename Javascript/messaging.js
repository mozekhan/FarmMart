document.addEventListener("DOMContentLoaded", loadMessages);

async function loadMessages() {
  const messagesData = await fetch("http://localhost:5000/api/messages");
  const messages = await messagesData.json();
  const messagesContainer = document.getElementById("messagesContainer");

  messagesContainer.innerHTML = ""; // Clear existing messages
  messages.forEach(message => {
    const messageItem = document.createElement("div");
    messageItem.className = "message";
    messageItem.textContent = `${message.sender}: ${message.text}`;
    messagesContainer.appendChild(messageItem);
  });
}

document.getElementById("messageForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const messageInput = document.getElementById("messageInput");
  const messageText = messageInput.value;

  await fetch("http://localhost:5000/api/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: messageText })
  });

  messageInput.value = ""; // Clear the input field
  loadMessages(); // Refresh messages
});
