import React from 'react';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import SignIp from './pages/SignIn';
import SignUp from './pages/SignUp';
import Chat from './pages/Chat';
function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/signin" element={<SignIp/>}/>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/Chat" element={<Chat/>}/>
       <Route path="/" element={<Home/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
