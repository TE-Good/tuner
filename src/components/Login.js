import React, { useState } from 'react'
import axios from 'axios'


export default function Login() {

  const [form, setForm] = useState({ email: '', password: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/login', form)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      
  }

  return (
    <div className="login-page">
      {console.log('Form State', form)}
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <h6 className="login-title">Email</h6>
            <input className="login-input" type="text" name="email" onChange={handleChange} />
          </div>
          <div>
            <h6 className="login-title">Password</h6>
            <input className="login-input" type="password" name="password" onChange={handleChange} />
          </div>
          <button className="login-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}