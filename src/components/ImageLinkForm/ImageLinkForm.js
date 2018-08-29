import React from 'react'

import './ImageLinkForm.scss'

const ImageLinkForm = ({ handleInputChange, handleSubmit }) => {
  return (
    <div>
      <p className="f4 tc">
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
      <div className="form w-70 center pa4 br4">
        <input
          onChange={handleInputChange}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              handleSubmit()
            }
          }}
          className="f4 pa2 w-70 shadow-5"
          type="text"
        />
        <button onClick={handleSubmit} className="w-30 grow f4 ph2 pv2 dib white bg-red shadow-5">
          Detect
        </button>
      </div>
    </div>
  )
}

export default ImageLinkForm
