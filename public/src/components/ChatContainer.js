
import React, { useState, useEffect,useRef} from 'react';
import { v4 as uuidv4 } from "uuid"
import ChatInput from '../components/ChatInput';
import axios from 'axios';
import { sendMessageRoute, getAllMessagesRoute } from "../utils/APIRoutes";


export default function ChatContainer({ currentChat, currentUser, socket }) {
  const [messages, setMessages] = useState([]);
  const [arrivalmessage, setArrivalMessages] = useState(null);
  const scrollRef=useRef()
  useEffect(() => {
    async function Data() {
      const response = await axios.post(getAllMessagesRoute, {
        from: currentUser._id,
        to: currentChat._id,
      })
      setMessages(response.data);
    }
    Data();
  }, [currentChat,currentUser._id]);
  const handleSendMsg = async (msg) => {
    // alert(msg);
    await axios.post(sendMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });
    // console.log(socket.current);
    try{
      socket.current.emit("send-msg",{
      to: currentChat._id,
      from: currentUser._id,
      msg,
    }
    );
    }catch(ex){
      console.log(ex)
    }
    
    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };
  useEffect(()=>{
     if(socket.current){
       socket.current.on("msg-recieve",(msg)=>{
             setArrivalMessages({ fromSelf: false, message: msg })
       });
     }
  },[socket]);
  useEffect(()=>{
    arrivalmessage && setMessages((prev)=>[...prev,arrivalmessage])
 },[arrivalmessage]);
 useEffect(()=>{
  scrollRef.current?.scrollIntoView({behaviour:"smooth"})
},[messages]);
  return (
    <>
      <div className="overflow-y-scroll pr-2.5 scrollbar-none h-page">
        <div className='flex'>
          <img src="assets/profil/9.jpeg" alt="Logo" className="rounded-full h-8 w-8 object-cover mr-5" />
          <span className="font-medium">{currentChat && currentChat.username}</span>
        </div>
        {
          messages.map((message) => {
            // console.log(message);
            return (
              <div className={message.fromSelf ? "message own" : "message"} ref={scrollRef} key={uuidv4()}>
                <div className="flex">
                  <img
                    className="rounded-full h-8 w-8 object-cover mr-5"
                    src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <p className="messageText">{message.message}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </>
  )
}
