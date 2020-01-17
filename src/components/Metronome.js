import React, { useState } from 'react'

export default function Metronome() {

  const [bpm, setBpm] = useState(60)

  var intervalId = null

  const metronome = () => {
    intervalId = setInterval(() => {
      console.log('tick', bpm)
    }, 60000 / bpm)
  }


  return (
    <div className="metronome-wrapper">
      <h1>Metronome</h1>
      <div className="horizontal-line"></div>
      <input onChange={e => setBpm(e.target.value)} value={bpm} />
      <button onClick={() => metronome()}>Start</button>
      <button onClick={() => clearInterval(intervalId)}>Stop</button>
    </div>
  )
}