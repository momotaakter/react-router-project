import React from 'react'
import { Navigate } from 'react-router-dom'

function Contact() {
  const btn=()=>{
    Navigate('/home')
  }
  return (
    <div>
      <h1>contact page</h1>
    </div>
  )
}

export default Contact
