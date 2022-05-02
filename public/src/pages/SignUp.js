import React from 'react'
import { useState, useEffect} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { registerRoute } from '../utils/APIRoutes.js';


export default function SignUp() {
  const navigate=useNavigate();
  const [values ,setValues]=useState({
    email:"",
    username:"",
    password:"",
    confirmpassword:""
  })
  const toastOptions= {
    autoClose:8000,
    pauseOnOver:true,
    draggable:true,
    theme:"light",
    
  }
  useEffect(()=>{
    if(localStorage.getItem('chat-app')){
      navigate('/');
    }
  },[]);
  const handleSubmit = async(event)=>{
    event.preventDefault();
    if(handleVerify()){
      console.log("in validation",registerRoute)
      // console.log(data);
      const {email,username,password}=values;
      const {data}=await axios.post(registerRoute,{email,username,password})
      if(data.status===false){
        toast.error( 
          data.msg,toastOptions
        );
      }
      if(data.status===true){
        console.log("data inserée");
        localStorage.setItem('chat-app',JSON.stringify(data.user));
        navigate("/");
      }
      
    }
  }
  const handleChange =(e)=>{
    setValues({...values,[e.target.name]:[e.target.value]})
  }

  const handleVerify =()=>{
    const {email,username,password,confirmpassword}=values;
    if(username.toString().length < 3){
      toast.error( 
        "Username should be greater than 3 characters !",toastOptions
      )
      return false;
    }else if(email.toString().length===0){
      toast.error( 
        "Email field is required !",toastOptions
      )
      return false;
    }else if(password.toString()!==confirmpassword.toString()){
      toast.error( 
        "Password and confirm password are not the same !",toastOptions
      )
      return false;
    }else if(password.toString().length < 8){
      toast.error( 
        "Password should be greater than 8 characters !",toastOptions
      )
      return false;
    }else {
      return true;
    }
  }
  return (
    <>
    <div className="grid place-items-center h-screen bg-gray-100">
    <form onSubmit={(event)=>handleSubmit(event)} className="bg-white shadow-xl shadow-gray-500 rounded-xl px-16  pb-16 ">
    <div className="flex items-center ">
      <img src="assets/log.png" alt="Logo" className="h-28 w-28"/>
      <span className="font-bold uppercase text-xl">Heey</span>
    </div>
    <div className="mb-4">
      <input onChange={(e)=>handleChange(e)} className="shadow appearance-none border-blue-700 border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name="username"/>
    </div>
    <div className="mb-4">
      <input onChange={(e)=>handleChange(e)} className="shadow appearance-none border-blue-700 border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="mail" type="email" placeholder="Email" name="email"/>
    </div>
    <div className="mb-4">
      <input onChange={(e)=>handleChange(e)} className="shadow appearance-none border-blue-700 border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" name="password"/>
    </div>
    <div className="mb-4">
      <input onChange={(e)=>handleChange(e)} className="shadow appearance-none border-blue-700 border rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmpassword" type="password" placeholder="Confirm Password" name="confirmpassword"/>
    </div>
    <div className="mb-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign Up
      </button>
    </div>
    <Link className="inline-block align-baseline font-bold text-sm py-2 px-4 text-red-600 hover:text-blue-800" to="/signin">
        Already have an account?
    </Link>
  </form>
    </div>
    <ToastContainer/>
    </>
  )
}
