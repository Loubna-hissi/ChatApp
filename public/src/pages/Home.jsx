import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
export default function Home() {
    return ( 
      <div>
          <Navbar></Navbar> 
          <div className='Homepage'>
              <Sidebar></Sidebar> 
              <Feed></Feed>
              <Rightbar></Rightbar>
          </div> 
      </div> 
);  
}
