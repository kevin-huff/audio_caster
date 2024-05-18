// Step 1: Setup a basic Node.js server with Express and Socket.io
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('audio', (data) => {
    // Broadcast the audio to all connected clients except the sender
    socket.broadcast.emit('audio', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
