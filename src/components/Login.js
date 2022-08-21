import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Login(props) {
  const [cred, setCred] = useState({ email: "", password: "" })
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: cred.email, password: cred.password })
    })
    const json = await response.json()
    console.log(json);

    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem('token', json.authToken)
      navigate("/");
      props.showAlert('Logged in Successfully', 'success', 'Success');
    }
    else {
      props.showAlert(`${json.error || json.errors[0].msg}`, 'danger', 'Error');
    }
  }

  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }

  return (
    <form method='post' onSubmit={handleSubmit}>
      <h1>Login to your Cloud Notes</h1>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={cred.email} onChange={onChange} required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" value={cred.password} onChange={onChange} required />
      </div>

      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  )
}
