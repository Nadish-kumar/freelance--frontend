import React from 'react'
import "./Teacherhome.css"
import {useState,useEffect} from "react";
import Box from '@mui/material/Box';
import axios from "axios"
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Teacherhome = () => {
  
  
  useEffect(() => {
    getdata()
  }, [])
  
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [student, setstudent] = useState([])
  const [firstdata, setfirstdata] = useState([])

  const formik = useFormik({
    initialValues: {
      name: '',
      subject: '',
      mark: '',
    },
    onSubmit:async (values) => {
      var findstudent = await axios.get(`http://localhost:3000/users/get`).then((res)=>{ return res.data})
      console.log(findstudent)
      var filterstudent = findstudent.filter((data) => values.name == data.name)
     
    
    // var namecheck = {
    //   name: values.name
    // }
    // var findone = await axios.post(`http://localhost:3000/users/getref`,namecheck)
   
    // console.log(findone.data.mark)

 console.log(filterstudent.length)
 if(filterstudent.length !== 0) {
  var markvalue = {
    id : filterstudent[0]._id,
    name : values.name,
    mark :   values.mark + filterstudent[0].mark,
    subject : values.subject
}
console.log(markvalue)
var postdata = await axios.post(`http://localhost:3000/users/main`,markvalue)
console.log(postdata.data)
alert("hi nadish")
      getdata()
      setOpen(false)
  
 }else {
  var postnewdata = await axios.post(`http://localhost:3000/users`,values)
        console.log(postnewdata.data);
        alert("hi nadish")
        getdata()
        setOpen(false)
 }








// if(filterstudent[0].length !== 0 ){
//     var postdata = await axios.post(`http://localhost:3000/users/main`,markvalue)
//       getdata()
//       setOpen(false)
//     }else {
//       var postnewdata = await axios.post(`http://localhost:3000/users`,values)
//       console.log(postnewdata.data);
//       getdata()
//       setOpen(false)
//     }
  },
  
  
  });

 

  const getdata = async() => {
    try {
      var response = await axios.get(`http://localhost:3000/users/get`)
      setstudent(response.data)
    } catch (error) {
      console.log(error);
    }
   
  } 

  const deletehandler = async (id) => {
    var id = document.getElementById("objId").value
   
    var value = {
      _id : id
    }
    console.log(value);
  try {
    var deleteref = await axios.delete(`http://localhost:3000/users/delete`,value)
    console.log(deleteref);
    getdata()
  } catch (error) {
    console.log(error);
  }
  }
  return (
    <div>
        <h1 className='teacher_heading'>Student logs</h1>
        <div>
            <button className='teacher_button' onClick={handleOpen}>+ Add</button>

            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
          <label>Enter the Name :</label>
         <input type="text"    onChange={formik.handleChange} name="name"
         value={formik.values.name} />
         <label>Enter the Subject : </label>
         <input type="text"    onChange={formik.handleChange} name="subject"
         value={formik.values.subject}/>
         <label>Enter the Mark :</label>
         <input type="number"    onChange={formik.handleChange} name="mark"
         value={formik.values.mark}/>
         <button className='btn btn-success tea_button' type="submit">submit</button>
         </form>
        </Box>
      </Modal>
        </div>
        <div className='tableref'>
        <table className="table">
  <thead>
    <tr>
     
      <th scope="col">Name</th>
      <th scope="col">Subject</th>
      <th scope="col">Mark</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {
      student.map((data,index) => {
        return (
          <tr key={index}>
          
          <td>{data.name}</td>
          <td>{data.subject}</td>
          <td>{data.mark}</td>
          <td>
          <button className='btn btn-success'>Edit</button>
        <button className='btn btn-danger' onClick={deletehandler}  value={data._id} id="objId">Delete</button>
          </td>
        </tr>
        )
      })
    }
   

  </tbody>
</table>
        </div>
    </div>
  )
}

export default Teacherhome