import React, { useState, useEffect } from 'react'
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
import Dash from './components/Dash'
import Nav from './components/Nav'


function App() {

  return (
    <>
      <BrowserRouter>
        <main>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/tuner" component={Tuner}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/metronome" component={Metronome}/>
            <Route path="/dashboard" component={Dash}/>
          </Switch>          
        </main>
      </BrowserRouter>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)