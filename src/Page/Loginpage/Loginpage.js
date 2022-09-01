import React from 'react'
import "./Loginpage.css"
import { Link } from 'react-router-dom'

const Loginpage = () => {
  return (
    <div className='container'>
    <div className='box'>
        <h1>Freelance Website</h1>
        <h4>Login your Account</h4>
        <div className='inputref'>
          <label>Enter your email : </label>
        <input type="email"  />
        </div>
        <div className='inputref'>
          <label>Enter your Password : </label>
        <input type="password"  />
        </div>
        <div className='buttongrop'>
        <button type='submit' className='clientbutton'> Login</button>
        <Link to="/clientsignup">
        <button type='submit' className='clientbutton'> Sign Up</button>
        </Link>
     
        </div>
  
    </div>
</div>
  )
}

export default Loginpage