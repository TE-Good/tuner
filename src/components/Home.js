import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home-wrapper">
      <Link to='/tuner'>TUNER</Link>
      <Link to='/metronome'>METRONOME</Link>
    </div>
  )
}