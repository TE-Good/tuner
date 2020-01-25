import React from 'react'


export default function Login() {

  return (
    <div className="login-page">
      <div className="login-form-container">
        <form className="login-form">
          <div>
            <h6 className="login-title">Email</h6>
            <input className="login-input" type="text"/>
          </div>
          <div>
            <h6 className="login-title">Password</h6>
            <input className="login-input" type="password"/>
          </div>
          <button className="login-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}