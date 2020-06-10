const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 5000;

const router = require('./router')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('We have a new connection!!!');

    // receiving data from emit
    // sending callback function to client
    socket.on('join', ({ name, room }, callback) => {
        console.log(name, room);

        // const error = true;

        // if (error) {
        //     callback({ error: 'error'})
        // }
    })

    socket.on('disconnect', () => {
        console.log('User had left!')
    })
})

app.use(router)

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`))