import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Signup(props) {
  const [cred, setCred] = useState({ name: "", email: "", password: "", cpassword: "" })
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = cred;
    if (password === cpassword) {
      const response = await fetch('https://i-notebook-flame.vercel.app/api/auth/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      })
      const json = await response.json()
      console.log(json);

      if (json.success) {
        // save the auth token and redirect
        localStorage.setItem('token', json.authToken)
        navigate("/");
        props.showAlert('Account is created successfully', 'success', 'Success');
      }
      else {
        props.showAlert(`${json.error || json.errors[0].msg}`, 'danger', 'Error');
      }

    }
    else {
      props.showAlert('Password and Confirm Password are not same', 'warning', 'Alert');
    }
  }

  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }

  return (
    <form method='post' onSubmit={handleSubmit}>
      <h1>Create an Account for free</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" onChange={onChange} required />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} required />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
      </div>

      <button type="submit" className="btn btn-success px-5">Create an Account</button>
    </form>
  )
}
