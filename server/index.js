const express=require("express");
const cors =require("cors");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const mongoose=require("mongoose");
const socket=require("socket.io");
// const expressJWT=require("express-jwt");
const App=express();
const userRoute =require("./routes/userRoute.js");
const messageRoute = require("./routes/messageRoute");
require("dotenv").config({path:'./config/.env'});

App.use(cors());
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended:true}))
App.use(cookieParser())
App.use(express.json());
App.use("/api/auth",userRoute);
App.use("/api/messages", messageRoute);
//connect to database
mongoose.connect(process.env.MONGO_URL,
    {
    UseNewUrlParser:true,
    useUnifiedTopology:true,
    }).then(()=>console.log("DB connected successufully!"))
    .catch((e)=>{
           console.log(e.message)
    }
    )

const server = App.listen(process.env.PORT,()=>{
      console.log(`Server is listening on ${process.env.PORT}`);
});

const io = socket(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true,
    },
  });
  
  global.onlineUsers = new Map();
  io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
      onlineUsers.set(userId, socket.id);
    });
  
    socket.on("send-msg", (data) => {
      const sendUserSocket = onlineUsers.get(data.to);
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit("msg-recieve", data.msg);
      }
    });
  });
