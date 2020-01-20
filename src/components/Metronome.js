import React, { useState, useEffect } from 'react'

export default function Metronome() {

  const [bpm, setBpm] = useState(120)

  const Tone = require('Tone')
  const synth = new Tone.Synth().toMaster()

  const horizontalMetro = React.createRef()
  console.log(horizontalMetro)

  useEffect(() => {
    console.log('render')
    // if (horizontalMetro.current) horizontalMetro.current.style.width = '10vw'
  }, [])


  // horizontalMetro.style.width = '10vw'

  var intervalId = null
  
  const metronome = () => {
    // horizontalMetro.current.style.width = '0vw'
    let count = 0
    intervalId = setInterval(() => {
      console.log(count % 4)
      if (count % 4 === 0) synth.triggerAttackRelease('G4', 0.1)
      else synth.triggerAttackRelease('G3', 0.1)
      switch (count % 4) {
        case 0:
          horizontalMetro.current.style.width = '80vw'
          horizontalMetro.current.style.background = '#C64947'
          break
        case 1:
          horizontalMetro.current.style.width = '50vw'
          horizontalMetro.current.style.background = '#7EB77F'
          break
        case 2:
          horizontalMetro.current.style.width = '30vw'
          break
        case 3:
          horizontalMetro.current.style.width = '10vw'
          break
      }
      count++
    }, 60000 / bpm)
  }

  function handleStop(interval) {
    clearInterval(interval)
    horizontalMetro.current.style.width = '80vw'
    horizontalMetro.current.style.background = '#555'
  }

  return (
    <div className="metronome-wrapper">
      <h1>Metronome</h1>
      <div className="horizontal-line" ref={horizontalMetro}></div>
      <div className="bpm-wrapper">
        <div className="bpm-change">
          <p>BPM</p>
          <input onChange={e => setBpm(e.target.value)} value={bpm} />
        </div>
      </div>
      <div className="start-stop">
        <button onClick={() => metronome()}>Start</button>
        <button onClick={() => handleStop(intervalId)}>Stop</button>
      </div>
    </div>
  )
}