import React, { useState } from 'react'
import "../login/LoginScreen.css"

const loginScreen = () => {
  const [signin, setSignin]= useState(false);

  return (
    // {signin?(
      
    // ):(
    <div className='loginScreen'>
    <div className="loginBody">
   
    <h1>Admin Login</h1>
 
  <div className="input">
    <form action="">
    <input type="text" placeholder="Enter your email to start.."className='loginInput' />
    <input type="text" placeholder="Enter your password"className='loginInput' />
  <button 
  onClick={()=>setSignin(true)}className='loginStarted'>Login</button>
    </form>
    </div>
   
    </div>
    </div>
    // )}
  )
}

export default loginScreen