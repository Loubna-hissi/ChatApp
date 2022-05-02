import {React ,useEffect,useState,useRef} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar'
import Conversation from '../components/Conversation'
import Welcome from '../components/Welcome'
import ChatContainer from '../components/ChatContainer'
import { allUsersRoute,host } from '../utils/APIRoutes.js';
import io from 'socket.io-client';

const Chat = () => {
  const socket =useRef();
  const navigate=useNavigate();
    const [contacts,setContacts]=useState([]);
    const [currentUser,setCurrentUser]=useState(undefined);
    const [currentChat,setCurrentChat]=useState(undefined);
    useEffect(()=>{ async function fetchData() {
      if(!localStorage.getItem("chat-app")){
        navigate("/signin");
      }else{
        setCurrentUser(await JSON.parse(localStorage.getItem("chat-app")));
      }
    }
    fetchData();
  },[]);
  useEffect(()=>{
     if(currentUser){
      socket.current=io(host);
      socket.current.emit("add-user",currentUser._id);
     }
  },[])
  useEffect(()=>{async function fetchData() {
    if(currentUser){
     const data=await axios.get(`${allUsersRoute}/${currentUser._id}`);
     setContacts(data.data);
    }
  }
  fetchData();
},[currentUser]);
  const handleChatChange=(chat)=>{
    setCurrentChat(chat);
  }
    return ( 
        <>
              <Navbar></Navbar> 
              <div className='grid grid-cols-12 w-full bg-middleDarkGray h-page'>
                <div className="grid col-span-3">
                  <div className='p-2.5'>
                    <input type="text" placeholder='Seach for a friend' className='p-2.5 w-11/12 focus:outline-none w-50 border-b bg-middleDarkGray border-gray-400 text-sm'/>
                    <Conversation contacts={contacts} currentUser={currentUser} handleChatChange={handleChatChange}/>
                  </div>
                </div>
                <div className="grid col-span-6">
                  <div className='flex flex-col h-page'>
                  
                  {
                    currentChat ===undefined ?
                    (<Welcome currentUser={currentUser}/>) :(<ChatContainer currentChat={currentChat} currentUser={currentUser} socket={socket}/>)
                  }
                  
                  </div>
                </div>
                {/* <div className="flex col-span-3">
                  <div className='p-2.5'>online</div>
                </div> */}
              </div>
        </>
     );
}
 
export default Chat;