import React, { useState, useEffect } from 'react'
import axios from 'axios'


// G-Tool? Practice Tool?
// ukelele
// bass
// change the length of release
// a stum button of some kind
// have a button that plays through all of them one at a time
// metronome (black line in the middle with a circle moving back and forth/another version which is a circle that a ball moves around and at the bottom it hits the tone) (tone changed in Hz)
// put songs you want to practice too for each tuning (with option for youtube link or spotify link)
// sign in and have your specific release - songs you put into
// make a react native version?

const Tone = require('Tone')
const synth = new Tone.Synth().toMaster()

function Tuner() {
  const [tuning, setTuning] = useState({ name: 'Standard', notes: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'] })
  const [release, setRelease] = useState(.1)
  Tone.Transport.start()

  const typesOfTunings = [
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
    { name: 'Open C', notes: ['C2', 'G2', 'C3', 'G3', 'C4', 'E4'] }
  ]

  function handleStrum() {
    synth.triggerAttackRelease(tuning.notes[0], 0.5, 0.1)
    synth.triggerAttackRelease(tuning.notes[1], 0.5, 1)
    synth.triggerAttackRelease(tuning.notes[2], 0.5, 2)
    synth.triggerAttackRelease(tuning.notes[3], 0.5, 3)
    synth.triggerAttackRelease(tuning.notes[4], 0.5, 4)
    synth.triggerAttackRelease(tuning.notes[5], 0.5, 5)
  }

  useEffect(() => {
    console.log('mounted')
    axios.get('api/tuner')
      .then(tunings => console.log(tunings))
  })


  return (
    <div className="tuner-wrapper">
      <div className="tuner-container-left">
        <h1>Tuner</h1>
        <div className="tunings-buttons">
          {typesOfTunings.map(tuning => <button key={tuning.name} onClick={() => setTuning(tuning)}>{tuning.name}</button>)}
        </div>
        <div className="release-input">
          <p>Tone Release Timing (Seconds):</p>
          <input onChange={e => setRelease(e.target.value)} value={release} placeholder="Default: 0.1" />
        </div>
      </div>
      <div className="tuner-container-right">
        {/* <div>Tuning: {tuning.name}</div> */}
        <div className="tone-buttons">
          {tuning.notes.reverse().map(ele => <button key={ele} onClick={() => synth.triggerAttackRelease(ele, `${release}`)}>{ele}</button>)}
        </div>
        <div className="guitar-frets">
          {tuning.notes.map(ele => <div key={ele} onClick={() => synth.triggerAttackRelease(ele, `${release}`)}></div>)}
        </div>
      </div>
      {/* <button onClick={handleStrum}>Strum</button> */}
    </div>
  )
}

export default Tuner