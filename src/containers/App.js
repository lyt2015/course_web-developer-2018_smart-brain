import React from 'react'
import Particles from 'react-particles-js'
import 'tachyons'

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

const initialState = {
  input: '',
  imageUrl: '',
  boxes: [],
  route: 'signin',
  isSignedIn: false,
  user: null,
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  handleInputChange = async e => {
    await this.setState({ input: e.target.value })
  }

  handlePatch = async () => {
    try {
      const res = await fetch('https://damp-retreat-12750.herokuapp.com/image', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _id: this.state.user._id,
        }),
      })
      console.log(res)

      const result = await res.json()
      console.log(result)

      this.setState({ user: result })
    } catch (error) {
      console.log('problem connecting image endpoint')
    }
  }

  handleSubmit = async () => {
    try {
      this.setState({ boxes: [] })
      this.setState({ imageUrl: this.state.input })
      const res = await fetch('https://damp-retreat-12750.herokuapp.com/imageurl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageUrl: this.state.input,
        }),
      })
      const result = await res.json()
      if (result.outputs.length > 0) {
        const regions = result.outputs[0].data.regions
        console.log(regions)
        this.calculateBoxes(regions)

        this.handlePatch()
      }
    } catch (error) {
      console.log('problem fetching clarifai results')
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
      this.setState({
        input: '',
        imageUrl: '',
        boxes: [],
        isSignedIn: false,
        user: null,
      })
      // this.setState(initialState)
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
