import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log('done');
    }
    else {
      navigate("/login")
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      This is user profile page. (Under development!)
    </div>
  )
}