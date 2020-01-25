import React from 'react'


export default function Login() {

  return (
    <div className="login-page">
      <div className="register-form-container">
        <form className="register-form">
          <div>
            <h6 className="login-title">Username</h6>
            <input className="login-input" type="text"/>
          </div>
          <div>
            <h6 className="login-title">Email</h6>
            <input className="login-input" type="text"/>
          </div>
          <div>
            <h6 className="login-title">Password</h6>
            <input className="login-input" type="password"/>
          </div>
          <div>
            <h6 className="login-title">Password Confirmation</h6>
            <input className="login-input" type="password"/>
          </div>
          <button className="login-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}