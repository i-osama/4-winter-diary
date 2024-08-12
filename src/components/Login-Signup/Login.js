import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {

    const [credentials, setCredentials] = useState({email:"", password:""}) 
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            
            headers: {
              'Content-Type':'application/json',
               },
               body: JSON.stringify({email: credentials.email, password: credentials.password})
           
          });

          const json = await response.json();
          console.log(json)

          if(json.success){
            //redirect
            props.showAlert("Loggedin successfully", 'success')
            localStorage.setItem('token' , json.authToken );
            navigate('/');
          }else{
            props.showAlert("Invalid Credentials!!", 'danger')
          }

    }

    
  const onChange = (element)=>{
    setCredentials({...credentials, [element.target.name]:element.target.value})
  }

  return (
    <div className='container mx-2 my-4'>
      <form  onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name='password'/>
  </div>
  <div className='d-flex justify-content-center flex-column align-items-center'>
    <div>

  <button type="submit" className="btn  btn-outline-dark">Submit</button>
    </div>

  <div>Already have a account? <u><Link to='/signup'>Signup</Link></u></div>
  </div>
</form>
    </div>
  )
}

export default Login
