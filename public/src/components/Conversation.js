import { useState,useEffect } from "react";
const Conversation= ({contacts ,currentUser,handleChatChange}) => {
    const[currentUserName,setCurrentUserName]=useState(undefined);
    const[currentUserImage,setCurrentUserImage]=useState(undefined);
    const [currentSelected,setCurrentSelected]=useState(undefined);
    useEffect(()=>{
      if(currentUser){
        //   console.log(currentUser);
        //   console.log(contacts);
          setCurrentUserImage(currentUser.avatarImage);
          setCurrentUserName(currentUser.username);
      }
    },[currentUser]);
    const changeCurrentChat=(index,contact)=>{
          setCurrentSelected(index);
          handleChatChange(contact);
          
    }
    return <>
        {currentUserName &&
        (
            
    <div>
        {
            
            contacts.map((contact,index)=>{
                return (
                    <div className={`contact ${index===currentSelected ?"selected":""} flex items-center p-2.5 cursor-pointer`} 
                    key={index}
                    onClick={()=>changeCurrentChat(index,contact)}
                    >
                           <img src="assets/profil/9.jpeg" alt="Logo" className="rounded-full h-8 w-8 object-cover mr-5"/>
                           <span className="font-medium">{contact.username}</span>
                    </div>
                )
            })
        }
        
    </div>
        )
}
    
        
    </> ;
}

export default Conversation;