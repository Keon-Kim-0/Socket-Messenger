/* needs:
-sticky bar
-user list
-DM system
-right side appearance for sending text
*/

const http=require('http')
const express =require('express');
const socketio=require('socket.io');

const app = express();
console.log(typeof app)
//const clientPath='C:\Users\Keon\back-end\game\client';


app.use(express.static('../client'));


const server = http.createServer(app);

const io= socketio(server);

const users=[0]

io.on('connection',(sock)=>{
  //connect
  let cache=users[users.length-1]+1
  let userid='guest#'+cache
  users.push(cache)
  console.log(users)
  users.length>2 ? io.sockets.emit('population',(users.length-1)+' users online'):
  io.emit('population',(users.length-1)+' user online')
  sock.emit('id',userid)
  io.sockets.emit('announcement',userid+' has connected')
  //chat
  console.log(userid)
  sock.on('chat',(text)=>{
    console.log(userid)
    io.emit('messenger',userid+': ')
    io.emit('message',text);
  })
  //disconnect
  sock.on('disconnect',()=>{
    console.log(userid+' has disconnected')
    users.splice(users.indexOf(cache),1)
    users.length>2 ? io.sockets.emit('population',(users.length-1)+' users online'):
    io.sockets.emit('population',(users.length-1)+' user online')
    io.sockets.emit('announcement',userid+' has disconnected')
    console.log(users)
  })
})

server.on('error',function(err){
  console.log('something got fucked',err)
})

server.listen(8080, () =>{
  console.log('rps started on 8080')
})
