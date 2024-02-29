import React from 'react'
import "./LogoutSection.css"

const LogoutSection = () => {

  const logout = (e) => {
    window.localStorage.clear();
    console.log("logout");
   // window.location.href = baseUrl + "login";
  }
  return (
    <div className='logout-div'>
      <ul>
        <li>Profile</li>
        <li>Settings</li>
        <li onClick={(e)=>logout(e)}>Logout</li>
      </ul>
      
    </div>
  )
}

export default LogoutSection