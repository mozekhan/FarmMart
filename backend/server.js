// backend/server.js
Const express = require(“express”);
Const http = require(“http”);
Const socketIo = require(“socket.io”);
Const connectDB = require(“./config/db”);

Const app = express();
Const server = http.createServer(app);
Const io = socketIo(server);

connectDB();

io.on(“connection”, (socket) => {
  console.log(“New client connected”);

  socket.on(“message”, (data) => {
    io.emit(“newMessage”, data);
  });

  Socket.on(“disconnect”, () => {
    Console.log(“Client disconnected”);
  });
});

Const PORT = process.env.PORT || 5000;
Server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
