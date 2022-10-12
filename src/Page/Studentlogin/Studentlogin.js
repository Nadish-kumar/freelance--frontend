import React from 'react'
import "./Studentlogin.css"
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from 'axios';

const Studentlogin = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
   email: '',
   password: ""
    },
    onSubmit: async(values) => {
      try {
        var response = await axios.post(`http://localhost:3000/ref/login`,values)
        console.log(response.data)
        if(response.data.token == undefined) {
          alert("Please enter the correct email and password")
        }else{
          navigate("/teacher")
        }
      } catch (error) {
        console.log(error)
      }
    },
  });

  return (
    <div className='container'>
    <div className='box'>
        <h1>Student Website</h1>
        <h4>Login your Account</h4>
        <form onSubmit={formik.handleSubmit}>
        <div className='inputref'>
          <label>Enter your email : </label>
        <input type="email"   onChange={formik.handleChange}  name="email"
         value={formik.values.name} />
        </div>
        <div className='inputref'>
          <label>Enter your Password : </label>
        <input type="password"  onChange={formik.handleChange}  name="password"
         value={formik.values.password} />
        </div>
        <div className='buttongrop'>
        <button type='submit' className='clientbutton'> Login</button>
        <Link to="/studentsignup">
        <button type='submit' className='clientbutton'> Sign Up</button>
        </Link>
     
        </div>
  </form>
    </div>
</div>
  )
}

export default Studentlogin