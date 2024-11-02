import React, { useState } from 'react'
import './signin.css'
import { useNavigate } from 'react-router-dom';
import Userprofile from '../profile/Userprofile';

function Signin() {

    const[name,setName]=useState();
    const [email,setEmail]=useState();
    const [pass,setPass]=useState();

    const handlesubmit=(event)=>{
        event.preventDefault();
        console.log(name,email,pass);
        

    }
    const handletext=(e)=>{
      setName(e.target.value)
    }

    const handleemail=(e)=>{
        setEmail(e.target.value)

    }
    const handlepasschage=(e)=>{
        setPass(e.target.value)

     
        
    }
const mynavigate=useNavigate();

if(name==='momota'&& email==='momotaa808@gmail.com' && pass===12345678){
    mynavigate(Userprofile);

}


  return (

    <div className='form-container'>
 
        <form onSubmit={handlesubmit}>
            <input onChange={handletext} type="text" name="" id="" placeholder='enter your name'/>
     <input onChange={handleemail} type="email" name="" id="" placeholder='enter your email'/>
     <input type="password" name="" id="" placeholder='enter your password' onChange={handlepasschage}/>
     <button>sign in</button>
   </form>


   
    </div>
  )
}

export default Signin
