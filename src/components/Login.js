import React, { useState } from 'react'
import axios from 'axios'

import Auth from '../lib/auth'


export default function Login(props) {

  const [form, setForm] = useState({ email: '', password: '' })

  function handleChange() {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  async function handleSubmit() {
    event.preventDefault()

    const response = await axios.post('/api/login', form)
    await Auth.setToken(response.data.token)
    props.history.push('/')
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