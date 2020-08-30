import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'

const Tone = require('Tone')
const synth = new Tone.Synth().toMaster()
Tone.Transport.start()

function Tunes() {
  const [tuning, setTuning] = useState({ name: 'Standard', notes: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'] })
  const [release, setRelease] = useState(.1)

  const tunings = [
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

  function navToTuning(e, tune) {
    const nextTuning = tunings.find(tuning => tuning.name == tune.name)
    setTuning(nextTuning)
  }

  return (
    <div className="tunes-wrapper">
      <div className="tune-list-container">
        {tunings.map(tune => (
          <div
            key={tune.name}
            className={`${tune.name == tuning.name ? "tune-list-item-white" : ""}`}
            onClick={(e) => navToTuning(e, tune)}>
            {tune.name.toUpperCase()}
          </div>
        ))}
      </div>
      <div className="tune-container">
        <h3>{tuning.name.toUpperCase()}</h3>
        <div className="tune-buttons">
          {tuning.notes.map(note => (
            <Button key={note} variant="contained" onClick={() => synth.triggerAttackRelease(note, `${release}`)}>{note}</Button>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Tunes


// SWIPING VERSION 
// return (
//   <div className="tunes-wrapper">
//     {tunings.map(tune => (
//       <div key={tune.name} className="tune-container">
//         <h3>{tune.name.toUpperCase()}</h3>
//         {/* PUT IN NAV ARROWS */}
//         <div className="tune-buttons">
//           {/* {tune.notes.map(note => <Button key={note} variant="outlined" onClick={() => synth.triggerAttackRelease(note, `${release}`)}>{note}</Button>)} */}
//           {tune.notes.map(note => <Button key={note} variant="contained" onClick={() => synth.triggerAttackRelease(note, `${release}`)}>{note}</Button>)}
//         </div>
//       </div>
//     ))}
//   </div>
// )