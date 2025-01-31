import React, { useState } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import "react-toastify/dist/ReactToastify.css"
import { toast } from 'react-toastify'



function AddPage() {




  const [values, setValues] = useState({
    name: '',
    age: 0,
    gender: '',
    salary: 0,
    address: '',
    status: '',
    email: ''
  })



  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3001/add', values)
      .then(res => {
        if (res.data === "create") {
          toast.success(" New Employee Added 🎁")
        }
        else {
          toast.error(" INTERNAL_SERVER_ERROR 🧨 ")

        }
      })
      .catch(err => console.log(err))
  }


  return (
    <>
      <form className='container-fluid w-50'>


        <div class="mb-3 mt-3">
          <label for="uname" class="form-label">Name :</label>
          <input type="text" onChange={(e) => setValues({ ...values, name: e.target.value })} class="form-control" id="uname" placeholder="Enter Your Name ..." name="uname" required />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>


        <div class="mb-3 mt-3">
          <label for="uname" class="form-label">Age :</label>
          <input type="number" onChange={(e) => setValues({ ...values, age: e.target.value })} class="form-control" id="uname" placeholder="Enter Age ..." name="uname" required />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>


        <div class="form-floating">
          <select onChange={(e) => setValues({ ...values, gender: e.target.value })} class="form-select" id="sel1" name="sellist">
            <option>Male</option>
            <option>Female</option>
            <option>Non-Binary</option>
          </select>
          <label for="sel1" class="form-label">Gender :</label>
        </div>


        <div class="mb-3 mt-3">
          <label for="uname" class="form-label">salary:</label>
          <input type="number" onChange={(e) => setValues({ ...values, salary: e.target.value })} class="form-control" id="uname" placeholder="Enter Salary" name="uname" required />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>


        <div class="mb-3 mt-3">
          <label for="uname" class="form-label">Address:</label>
          <input type="text" onChange={(e) => setValues({ ...values, address: e.target.value })} class="form-control" id="uname" placeholder="Enter Address" name="uname" required />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>


        <div class="form-floating">
          <select onChange={(e) => setValues({ ...values, status: e.target.textContent })} class="form-select" id="sel1" name="sellist">
            <option>Single</option>
            <option>Couple</option>
            <option>Married</option>
            <option>Divorce</option>
          </select>
          <label for="sel1" class="form-label">Status :</label>
        </div>


        <div class="mb-3 mt-3">
          <label for="uname" class="form-label">Email :</label>
          <input type="email" onChange={(e) => setValues({ ...values, email: e.target.value })} class="form-control" id="uname" placeholder="Enter Email ..." required />
          <div class="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>

        <div className='d-flex justify-content-around'>
          <button className='btn btn-success' onClick={(e) => handleSubmit(e)}><b>Add Employee +</b></button>
          <button className='btn btn-info'><Link className='text-decoration-none text-light' to='/'> <b>{'<- Return '} </b></Link></button>
        </div>

      </form>
    </>
  )
}

export default AddPage