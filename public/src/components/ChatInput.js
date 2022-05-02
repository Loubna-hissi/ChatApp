import React,{useState} from 'react';
import Picker from "emoji-picker-react";
import {IoMdSend} from 'react-icons/io';
import {BsEmojiSmileFill} from 'react-icons/bs';
const ChatInput = ({handleSendMsg}) => {
    const [showEmojiPicker,setShowEmojiPicker]=useState(false);
    const [msg,setMsg]=useState("");
    const handleEmojiClick=(event,emoji)=>{
        let message=msg;
        message+=emoji.emoji;
        setMsg(message);
    }
    const sendChat =(event)=>{
           event.preventDefault();
           if(msg.toString().length>0){
            //  alert(`oui ${msg.length}`)
            handleSendMsg(msg);
              setMsg('');
           }
    }
    const handleEmojiPickerHideShow=()=>{
        setShowEmojiPicker(!showEmojiPicker);
    }
    return ( 
        <>
        <div className="w-full items-center  mt-0.1">
                <div className=" felx text-3xl text-yellow-400 cursor-pointer ">
                        <BsEmojiSmileFill onClick={handleEmojiPickerHideShow}/>
                        {
                        showEmojiPicker && <Picker onEmojiClick={handleEmojiClick}/>
                        }
                </div>
                <form className='flex items-center w-full' onSubmit={(event)=>sendChat(event)}>
                  <input
                    className="mt-0.1 p-6 h-full w-full border scrollbar-none focus:outline-none rounded-xl "
                    placeholder="Type your message here..."
                    value={msg}
                    onChange={(e)=>setMsg(e.target.value)}
                  ></input>
                  <button className="flex items-center justify-center h-10 w-10 border-none rounded-full cursor-pointer text-white bg-green-600" type='submit'>
                    <IoMdSend/>
                  </button>
                </form>
        </div>
       </> );
}
 
export default ChatInput;