import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


function Navbar() {
  return (
    <>
    <div className="maincontainer">
      <div className="logoContainer">
        <span>M</span>
    
        </div>
      
    <div className='navbarContainer'>
        <ul>
        <Link to={'/home'}>Home</Link>
        <Link to={'/about'}>About</Link>
         <Link to={'/product'}>product</Link>
         <Link to={'./contact'}>contact</Link>
         <Link to={'./signin'}>sign in</Link>
        </ul>
     
    </div>
      
      
      
      
      
      
      
      
      
      </div>

    
    
    </>

  )
}

export default Navbar
