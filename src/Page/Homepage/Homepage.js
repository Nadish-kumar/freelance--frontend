import React from 'react'
import "./Homepage.css"
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='container'>
        <div className='box'>
            <h1>Freelance Website</h1>
            <div className='buttonref'>
                <Link to="/clientlogin">
                <button className='clientbutton'>Client</button>
                </Link>

               <button  className='clientbutton'>Freelance</button>
            </div>
        </div>
    </div>
  )
}

export default Homepage