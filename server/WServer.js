const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.json())

const rooms = new Map();

app.get('/rooms', function (req, res) {
    res.json(rooms);
});

app.post('/rooms', (req, res) => {

    const {login, roomId} = req.body

    if (!rooms.has(roomId)) {
        rooms.set(
            roomId,
            new Map([
                ['users', new Map()],
                ['massages', []],
        ])
        );
    }

    res.json();
})

io.on('connection', socket => {
    console.log('user connected', socket.id)
})

server.listen(8888, (err) => {
    if (err) {
        throw Error(err)
    }
    console.log('server start')
});