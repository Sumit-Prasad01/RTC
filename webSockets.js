import {WebSocketServer} from "ws";

const server = new  WebSocketServer({ port: 8080 });

server.on("connection", (socket) => {
  console.log("Client Connected");

  socket.send("Web Socket connected successfully.");

  socket.on("message", (message) => {
    console.log(message);
    socket.send("Hello from server");
  });
});


console.log("Web Socket running at port ws://localhost:8080");
