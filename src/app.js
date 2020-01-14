import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import './normalize.css'
import './skeleton.css'
import './style.scss'

import Home from './components/Home'
import Tuner from './components/Tuner'
import Metronome from './components/Metronome'


function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/tuner" component={Tuner}/>
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