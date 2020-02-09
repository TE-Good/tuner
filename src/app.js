import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import './styles/normalize.css'
import './styles/skeleton.css'
import './styles/style.scss'

import Home from './components/Home'
import Tuner from './components/Tuner'
import Metronome from './components/Metronome'
import Login from './components/Login'
import Register from './components/Register'

import Auth from './lib/auth'


function App() {

  function handleLogout() {
    Auth.logout()
  }

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/tuner'>Tuner</Link>
          <Link to='/metronome'>Metronome</Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          <Link to="/" onClick={handleLogout}>Logout</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/tuner" component={Tuner}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/metronome" component={Metronome}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)