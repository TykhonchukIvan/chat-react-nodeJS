const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/',express.static(path.join(__dirname, './dist')));

const rooms = new Map();

app.post('/rooms', (req, res) => {
  const data = req.body
  if (!rooms.has(data.roomId)) {
    rooms.set(
      data.roomId,
      new Map([
        ['users', new Map()],
        ['massages', []],
      ]),
    );
  }
  res.send();
})

app.get('/rooms/:id',  (req, res) => {
  const { id: roomId } = req.params;
  console.log(roomId);
  const obj = rooms.has(roomId) ? {
    users: [...rooms.get(roomId).get('users').values()],
    massages: [...rooms.get(roomId).get('massages').values()],
  } : { users: [], massages: []};
  res.json(obj);
});

io.on('connection', (socket) => {

  socket.on('ROOM:JOIN', (data) => {
    socket.join(data.roomId);
    rooms.get(data.roomId).get('users').set(socket.id, data.login);
    const users = [...rooms.get(data.roomId).get('users').values()];
    socket.to(data.roomId).broadcast.emit('ROOM:SET_USERS', users);
  });

  socket.on('ROOM:NEW_MESSAGE', ({ roomId, login, text }) => {

    const odj = {login, text}
    rooms.get(data.roomId).get('massages').push(odj);
    socket.to(data.roomId).broadcast.emit('ROOM:NEW_MESSAGE', odj);
  });

  socket.on('disconnect', () => {
    rooms.forEach((value, roomId) => {
      if (value.get('users').delete(socket.id)) {
        const users = [...value.get('users').values()];
        socket.to(roomId).broadcast.emit('ROOM:SET_USERS', users);
      }
    });
  });

  // console.log('user connected', socket.id);

})

server.listen(8888, (err) => {
  if (err) {
    throw Error(err)
  }
  console.log('server start')
});