import React from 'react'
import "./Homepage.css"
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='container'>
        <div className='box'>
            <h1>Student Website</h1>
            <div className='buttonref'>
                <Link to="/clientlogin">
                <button className='clientbutton'>Teacher</button>
                </Link>
              <Link to="/studentlogin">
               <button  className='clientbutton'>Student</button>
               </Link>
            </div>
        </div>
    </div>
  )
}

export default Homepage