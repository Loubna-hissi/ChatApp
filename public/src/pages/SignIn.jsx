import React from 'react'
import { useState, useEffect} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { loginRoute } from '../utils/APIRoutes.js';

export default function SinIn() {
  const navigate=useNavigate();
  const [values ,setValues]=useState({
    username:"",
    password:"",
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
      console.log("in validation login",loginRoute)
      // console.log(data);
      const {username,password}=values;
      const {data}=await axios.post(loginRoute,{username,password})
      if(data.status===false){
        toast.error( 
          data.msg,toastOptions
        );
      }
      if(data.status===true){
        // console.log("data inserée");
        localStorage.setItem('chat-app',JSON.stringify(data.user));
        navigate("/");
      }
      
    }
  }
  const handleChange =(e)=>{
    setValues({...values,[e.target.name]:[e.target.value]})
  }

  const handleVerify =()=>{
    const {username,password}=values;
    if(password===""){
      toast.error( 
        "Username and Password are required!",toastOptions
      )
      return false;
    }else if(username===""){
      toast.error( 
        "Username and Password are required!",toastOptions
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
      <input onChange={(e)=>handleChange(e)} className="shadow appearance-none border-blue-700 border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name="username" min="3"/>
    </div>
    <div className="mb-4">
      <input onChange={(e)=>handleChange(e)} className="shadow appearance-none border-blue-700 border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" name="password"/>
    </div>
    <div className="mb-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
    </div>
    <Link className="inline-block align-baseline font-bold text-sm py-2 px-4 text-red-600 hover:text-blue-800" to="/signup">
        Don't have an account?
    </Link>
  </form>
    </div>
    <ToastContainer/>
    </>
  )
}
