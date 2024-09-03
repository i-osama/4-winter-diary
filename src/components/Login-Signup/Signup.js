import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {


  const [credentials, setCredentials] = useState({ name: '', email: "", password: "", cpassword: '' })
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cpassword) {
      props.showAlert("Password is not matching, please check and confirm the password!", "danger")
    } else {
      // const {name,email, password} = credentials;
      const response = await fetch('http://localhost:5000/api/auth/createuser', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })

      });

      const json = await response.json();
      console.log(json)

      if (json.success) {
        //redirect

        props.showAlert("Account created successfully", 'success')
        localStorage.setItem('token', json.authToken);
        navigate('/');

      }
      else {
        props.showAlert("Invalid Credentials!!", 'danger')
        // props.showAlert(json.error, 'danger')
      }
    }
  }


  const onChange = (element) => {
    setCredentials({ ...credentials, [element.target.name]: element.target.value })
  }

  return (
    <div className='container mx-2 my-4'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" />
        </div>

{/* Gender Radio  */}
        <label htmlFor="name" className="form-label mx-3  ">Gender: </label>

        <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label"htmlFor="inlineRadio1">Male</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label"htmlFor="inlineRadio2">Female</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label className="form-check-label"htmlFor="inlineRadio3">Others</label>
</div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
