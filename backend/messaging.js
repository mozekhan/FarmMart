// In messaging.js, connect to Socket.IO and listen for real-time messages.

Const socket = io("http://localhost:5000");

Document.getElementById(“messageForm”).addEventListener(“submit”, (e) => {
  e.preventDefault();
  const messageText = document.getElementById(“messageInput”).value;

  // Send message to server
  Socket.emit(“message”, { text: messageText });

  // Clear the input field
  Document.getElementById(“messageInput”).value = “”;
});

Socket.on(“newMessage”, (data) => {
  Const messageContainer = document.getElementById(“messagesContainer”);
  Const messageElement = document.createElement(“div”);
  messageElement.className = “message”;
  messageElement.textContent = `New message: ${data.text}`;
  messageContainer.appendChild(messageElement);
});
