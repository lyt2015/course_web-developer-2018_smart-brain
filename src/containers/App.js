import React from 'react'
import Particles from 'react-particles-js'
import 'tachyons'
import Clarifai from 'clarifai'

import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Logo from '../components/Logo/Logo'
import Navigation from '../components/Navigation/Navigation'
import Rank from '../components/Rank/Rank'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from '../components/FaceRecognition/FaceRecognition'
import Signin from '../components/Signin/Signin'
import Register from '../components/Register/Register'
import '../styles/index.scss'
import './App.scss'

import { particlesOptions } from '../constants/constants'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      imageUrl: '',
      boxes: [],
      route: 'signin',
      isSignedIn: false,
      user: null,
    }

    this.app = new Clarifai.App({ apiKey: 'c330aeac794f40db9cb1ec09356e3171' })
  }

  handleInputChange = async e => {
    await this.setState({ input: e.target.value })
  }

  handlePatch = async () => {
    const patchRes = await fetch('http://localhost:3000/image', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: this.state.user._id,
      }),
    })
    console.log(patchRes)

    const patchResJSON = await patchRes.json()
    console.log(patchResJSON)

    this.setState({ user: patchResJSON })
  }

  handleSubmit = async () => {
    try {
      await this.setState({ boxes: [] })
      await this.setState({ imageUrl: this.state.input })
      const res = await this.app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.imageUrl)
      if (res.outputs.length > 0) {
        const regions = res.outputs[0].data.regions
        console.log(regions)
        this.calculateBoxes(regions)

        this.handlePatch()
      }
    } catch (error) {
      console.log(error)
    }
  }

  calculateBoxes = regions => {
    regions.forEach((region, index) => {
      const box = region.region_info.bounding_box
      const style = {
        top: `${(box.top_row * 100).toFixed(4)}%`,
        right: `${(box.right_col * 100).toFixed(4)}%`,
        bottom: `${(box.bottom_row * 100).toFixed(4)}%`,
        left: `${(box.left_col * 100).toFixed(4)}%`,
        width: `${((box.right_col - box.left_col) * 100).toFixed(4)}%`,
        height: `${((box.bottom_row - box.top_row) * 100).toFixed(4)}%`,
      }
      this.setState(preState => ({
        boxes: [...preState.boxes, <div key={index} className="bounding-box" style={style} />],
      }))
    })
  }

  loadUser = user => {
    this.setState({ user })
  }

  handleRouteChange = route => {
    this.setState({ route })
    if (route === 'home') {
      this.setState({ isSignedIn: true })
    } else {
      this.setState({ isSignedIn: false })
    }
  }

  calculateRoute = () => {
    switch (this.state.route) {
      case 'signin':
        return <Signin handleRouteChange={this.handleRouteChange} loadUser={this.loadUser} />
      case 'register':
        return <Register handleRouteChange={this.handleRouteChange} loadUser={this.loadUser} />
      default:
        return (
          <div>
            <Logo />
            <Rank user={this.state.user} />
            <ImageLinkForm
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
            />
            <FaceRecognition imageUrl={this.state.imageUrl} faceBoxes={this.state.boxes} />
          </div>
        )
    }
  }

  render() {
    return (
      <div>
        <Particles className="particles" params={particlesOptions} />
        <Navigation handleRouteChange={this.handleRouteChange} isSignedIn={this.state.isSignedIn} />
        {this.calculateRoute()}
      </div>
    )
  }
}

export default App
