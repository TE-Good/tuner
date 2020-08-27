import React, { useState } from 'react'

const Tone = require('Tone')
const synth = new Tone.Synth().toMaster()

function Tuner() {
  const [tuning, setTuning] = useState({ name: 'Standard', notes: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'] })
  const [release, setRelease] = useState(.1)
  Tone.Transport.start()

  const allTunings = [
    { name: 'Standard', notes: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'] },
    { name: 'Half-Step Down', notes: ['D#2', 'G#2', 'C#3', 'F#3', 'A#3', 'D#4'] },
    { name: 'Full-Step Down', notes: ['D2', 'G2', 'C3', 'F3', 'A3', 'D4'] },
    { name: 'Drop D', notes: ['D2', 'A2', 'D3', 'G3', 'B3', 'E4'] },
    { name: 'Drop C#', notes: ['C#2', 'G#2', 'C#3', 'F#3', 'A#3', 'D#4'] },
    { name: 'Drop C', notes: ['C2', 'G2', 'C3', 'F3', 'A3', 'D4'] },
    { name: 'Double Drop D', notes: ['D2', 'A2', 'D3', 'G3', 'B3', 'D4'] },
    { name: 'DADGAD', notes: ['D2', 'A2', 'D3', 'G3', 'A3', 'D4'] },
    { name: 'Open G', notes: ['D2', 'G2', 'D3', 'G3', 'B3', 'D4'] },
    { name: 'Open D', notes: ['D2', 'A2', 'D3', 'F#3', 'A3', 'D4'] },
    { name: 'Open C', notes: ['C2', 'G2', 'C3', 'G3', 'C4', 'E4'] },
    { name: 'Ukelele', notes: ['G4', 'C4', 'E4', 'A4'] }
  ]

  return (
    <div className="tuner-wrapper-container">
      <div className="tuner-title">
        <h1>Tuner</h1>
      </div>
      <div className="tuner-wrapper">
        <div className="tuner-container-left">
          <div className="tunings-buttons">
            {allTunings.map(tuning => <button key={tuning.name} onClick={() => setTuning(tuning)}>{tuning.name}</button>)}
          </div>
          <div className="release-input">
            <p>Tone Release Timing (Seconds):</p>
            <input onChange={e => setRelease(e.target.value)} value={release} placeholder="Default: 0.1" />
          </div>
        </div>
        <div className="tuner-container-right">
          <h2>{tuning.name}</h2>
          <div className="tone-buttons">
            {tuning.notes.map(ele => <button key={ele} onClick={() => synth.triggerAttackRelease(ele, `${release}`)}>{ele}</button>)}
          </div>
          {/* <div className="guitar-frets">
            {tuning.notes.map(ele => <div key={ele} onClick={() => synth.triggerAttackRelease(ele, `${release}`)}></div>)}
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Tuner