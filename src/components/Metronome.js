import React, { useState } from 'react'

export default function Metronome() {

  const [bpm, setBpm] = useState(120)

  const Tone = require('Tone')
  const synth = new Tone.Synth().toMaster()

  var intervalId = null

  
  const metronome = () => {
    let count = 0
    intervalId = setInterval(() => {
      // console.log(count % 4)
      if (count % 4 === 0) synth.triggerAttackRelease('G4', 0.1)
      else synth.triggerAttackRelease('G3', 0.1)
      count++
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