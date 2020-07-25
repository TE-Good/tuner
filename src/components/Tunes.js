import React from 'react'
import Button from '@material-ui/core/Button'

function Tunes() {
  return (
    <div className="tunes-wrapper">
      <div className="tune-container">
        <Button variant="contained">Default</Button>
      </div>
      <div className="tune-container"></div>
      <div className="tune-container"></div>
    </div>
  )
}
export default Tunes