import React from 'react'
import Tilt from 'react-tilt'

import './Logo.scss'
import brain from './brain.png'

const Logo = props => {
  return (
    <div className="ma4 fixed" style={{ height: 100, width: 100, top: 0, left: 0 }}>
      <Tilt className="Tilt br2 shadow-2" options={{ max: 35 }} style={{ height: 96, width: 96 }}>
        <div className="Tilt-inner pa3">
          <img src={brain} alt="brain logo" />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo
