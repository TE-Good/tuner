import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/normalize.css'
// import './styles/skeleton.css'
import './styles/style.scss'

import Home from './components/Home'
import Tuner from './components/Tuner'
import Metronome from './components/Metronome'
import Nav from './components/Nav'
import Tunes from './components/Tunes'



function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          {/* <Nav /> */}
          <Switch>
            <Route path="/metronome" component={Metronome}/>
            <Route path="/tunes" component={Tunes}/>
            <Route path="/tuner" component={Tuner}/>
            <Route exact path="/" component={Home}/>
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