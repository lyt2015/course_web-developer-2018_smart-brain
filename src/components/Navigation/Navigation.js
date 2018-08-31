import React from 'react'

import './Navigation.scss'

const Navigation = ({ handleRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="">
        <p
          className="f4 link dim black underline pa3 pointer"
          onClick={() => {
            handleRouteChange('signin')
          }}
        >
          Sign Out
        </p>
      </nav>
    )
  } else {
    return (
      <nav className="">
        <p
          className="f4 link dim black underline pa3 pointer"
          onClick={() => {
            handleRouteChange('register')
          }}
        >
          Register
        </p>
        <p
          className="f4 link dim black underline pa3 pointer"
          onClick={() => {
            handleRouteChange('signin')
          }}
        >
          Sign In
        </p>
      </nav>
    )
  }
}

export default Navigation
