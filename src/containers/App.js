import React from 'react'
import Particles from 'react-particles-js'
import 'tachyons'

import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Logo from '../components/Logo/Logo'
import Navigation from '../components/Navigation/Navigation'
import Rank from '../components/Rank/Rank'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import '../styles/index.scss'
import './App.scss'

const particlesOptions = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    line_linked: {
      shadow: {
        enable: true,
        color: '#33e',
        blur: 5,
      },
    },
    move: {
      speed: 6,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
      },
    },
    detect_on: 'window',
  },
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Particles className="particles" params={particlesOptions} />
        <Logo />
        <Navigation />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    )
  }
}

export default App
