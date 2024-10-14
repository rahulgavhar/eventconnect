const PORT = 4000;
import express from 'express'; 
import cors from 'cors'; 
import mongoose from 'mongoose'; 
import http from 'http'; 
import { Server } from 'socket.io'; 
// import ChatRoom from './Schemas/chatdata';
// import User from './Schemas/userData';

const app = express();

mongoose.connect('mongodb://localhost:27017/Chats').then(console.log("Database Connected"));

app.use(express.json());

app.use(cors({
  origin:"http://localhost:5173"
}))


const server = http.createServer(app)                                                                   

const io = new Server(server,{
  cors:{
    origin:"http://localhost:5173",
    methods:['GET','POST']
  }
})




io.on('connection',(socket)=>{
    console.log("Joined : "+socket.id);
  
    socket.on('join-room',code=>{
      socket.join(code)
      console.log(`${socket.id} joined room: ${code}`)
    })

    socket.on('send-message',(data)=>{
      console.log(data);
      
      socket.to(data.code).emit('reply',data);
    })
  })

  


  server.listen(PORT,()=>{
    console.log("server started");
    
    })