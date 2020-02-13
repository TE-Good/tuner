import React from 'react'
import { withRouter, Link } from 'react-router-dom'

import Auth from '../lib/auth'

function Nav() {

  function handleLogout() {
    console.log('logged out')
    Auth.logout()
  }

  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/tuner'>Tuner</Link>
      <Link to='/metronome'>Metronome</Link>
      {!Auth.isAuthenticated() && <Link to='/login'>Login</Link>}
      {!Auth.isAuthenticated() && <Link to='/register'>Register</Link>}
      {Auth.isAuthenticated() && <Link to="/" onClick={handleLogout}>Logout</Link>}
    </nav>
  )
}

export default withRouter(Nav)