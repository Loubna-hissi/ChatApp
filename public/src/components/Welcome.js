import React from 'react'

export default function Welcome({currentUser}) {
  return (
    <div className='overflow-y-scroll pr-2.5 h-page scrollbar-none flex-col'>
      <img src="assets/robot.gif" alt="Robot" className='h-4/5 w-4/5 text-center'/>
      <h1 className='font-bold text-3xl text-center'>Welcome, <span className='text-blue-400 '>{currentUser && currentUser.username} !</span> :)</h1>
      <h3 className='text-center text-base'>Please a chat to start messaging.</h3>
    </div>
  )
}
