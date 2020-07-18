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
    </nav>
  )
}

export default withRouter(Nav)