import React from 'react'

import './FaceRecognition.scss'

const FaceRecognition = ({ imageUrl, faceBoxes }) => {
  return (
    <div className="flex justify-center mt4 w-60 center" style={{ position: 'relative' }}>
      {faceBoxes}
      <img
        id="image"
        src={imageUrl}
        onError={() => {
          document.querySelector('#image').src =
            'https://clarifai.com/cms-assets/20180307033326/logo2.svg'
        }}
        alt="source image for prediction"
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default FaceRecognition
