import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import './normalize.css'
import './skeleton.css'
import './style.scss'

import Home from './components/Home'
import Tuner from './components/Tuner'
import Metronome from './components/Metronome'
import Login from './components/Login'


function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to='/tuner'>TUNER</Link>
          <Link to='/login'>Login</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/tuner" component={Tuner}/>
          <Route path="/login" component={Login}/>
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