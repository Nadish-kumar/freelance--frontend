import React from 'react'
import "./Signpage.css"
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from "axios"

const Signpage = () => {
  const formik = useFormik({
    initialValues: {
     email: '',
     password: '',
    },
    onSubmit: async (values) => {
      try {
        var response = await axios.post(`http://localhost:3000/ref/signup`,values)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
  });

  return (
    <div className='container'>
    <div className='box'>
        <h1>Student Website</h1>
        <h4>Signup your Account</h4>
        <form  onSubmit={formik.handleSubmit}>
        <div className='inputref'>
          <label>Enter your email : </label>
        <input type="email"   onChange={formik.handleChange} name="email"
         value={formik.values.email}  />
        </div>
        <div className='inputref'>
          <label>Enter your Password : </label>
        <input type="password"    onChange={formik.handleChange} name="password"
         value={formik.values.password} />
        </div>
        <div className='buttongrop'>
       
        
        <button type='submit' className='clientbutton'> Sign Up</button>
        
     
        </div>
        </form>
    </div>
</div>
  )
}

export default Signpage