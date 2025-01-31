import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router'
import "react-toastify/dist/ReactToastify.css"
import { toast } from 'react-toastify'
import { Link } from 'react-router'


function EditPage() {

  const params = useParams()
  const [name, setName] = useState('')
  const [age, setAge] = useState(20)
  const [gender, setGender] = useState('Male')
  const [salary, setSalary] = useState(1000)
  const [address, setAddress] = useState('')
  const [status, setStatus] = useState('Single')
  const [email, setEmail] = useState('')
  const [count, setCount] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3001/edit/" + params.id)
      .then(res => {

        setName(res.data.name)
        setAge(res.data.age)
        setGender(res.data.gender)
        setSalary(res.data.salary)
        setAddress(res.data.address)
        setStatus(res.data.status)
        setEmail(res.data.email)
        setData(res.data)
        console.log(data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleSubmitEdit = (e) => {

    e.preventDefault();
    axios.patch('http://localhost:3001/edit/' + params.id,
      {
        name, age, gender, salary, address, salary, address, status, email
      }
    )
      .then(res => {
        if (count === 2) {
          toast.success("Edit Success 😎")
          setCount(0)
          navigate('/')
        } else {
          toast.info("Click one more time to confirm 😉")
          setCount(count => count + 1)

        }
      })
      .catch(err => console.log(err))


  }


  return (
    <form className='container-fluid w-50'>

      <div class="mb-3 mt-3">
        <label for="uname" class="form-label">Name :</label>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} class="form-control" id="uname" placeholder="Enter Your Name ..." name="uname" required />
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>


      <div class="mb-3 mt-3">
        <label for="uname" class="form-label">Age :</label>
        <input type="number" onChange={(e) => setAge(e.target.value)} value={age} class="form-control" id="uname" placeholder="Enter Age ..." name="uname" required />
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>


      <div class="form-floating">
        <select onChange={(e) => setGender(e.target.value)} value={gender} class="form-select" id="sel1" name="sellist">
          <option>Male</option>
          <option>Female</option>
          <option>Non-Binary</option>
        </select>
        <label for="sel1" class="form-label">Gender :</label>
      </div>


      <div class="mb-3 mt-3">
        <label for="uname" class="form-label">salary:</label>
        <input type="number" onChange={(e) => setSalary(e.target.value)} value={salary} class="form-control" id="uname" placeholder="Enter Salary" name="uname" required />
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>


      <div class="mb-3 mt-3">
        <label for="uname" class="form-label">Address:</label>
        <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} class="form-control" id="uname" placeholder="Enter Address" name="uname" required />
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>


      <div class="form-floating">
        <select onChange={(e) => setStatus(e.target.value)} value={status} class="form-select" id="sel1" name="sellist">
          <option>Single</option>
          <option>Couple</option>
          <option>Married</option>
          <option>Divorce</option>
        </select>
        <label for="sel1" class="form-label">Status :</label>
      </div>


      <div class="mb-3 mt-3">
        <label for="uname" class="form-label">Email :</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} class="form-control" id="uname" placeholder="Enter Email ..." required />
        <div class="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
      </div>

      <div className='d-flex justify-content-around'>
        <button className='btn btn-success' onClick={(e) => handleSubmitEdit(e)}><b>Edit Employee </b></button>
        <button className='btn btn-info'><Link className='text-decoration-none text-light' to='/'> <b>{'<- Return '} </b></Link></button>
      </div>

    </form>
  )
}

export default EditPage