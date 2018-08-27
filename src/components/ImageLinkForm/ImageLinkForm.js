import React from 'react'

import './ImageLinkForm.scss'

const ImageLinkForm = props => {
  return (
    <div>
      <p className="f4 tc">
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
      <div className="form w-70 center pa4 br4">
        <input className="f4 pa2 w-70 shadow-5" type="text" />
        <button className="w-30 grow f4 ph2 pv2 dib white bg-red shadow-5">Detect</button>
      </div>
    </div>
  )
}

export default ImageLinkForm
