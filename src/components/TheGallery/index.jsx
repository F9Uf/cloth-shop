import React, { useState } from 'react'

const TheGallery = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  function changePictureTo(index) {
    setCurrentIndex(index)
  }

  return (
    <div className="gallery flex flex-col w-full">
      <div className="previewImage">
        <img src={pictures[currentIndex]} alt="current-picture"/>
      </div>
      <div className="thumbnails grid grid-flow-col gap-2 mt-2">
        {
          pictures &&
          pictures.map((pic, index) => (
            <img
              src={pic}
              alt="thumbnail"
              key={index}
              className={`cursor-pointer transition-all ${index === currentIndex ? 'border-gray-600 border-2' : 'opacity-80 hover:opacity-100'} `}
              onClick={() => changePictureTo(index)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default TheGallery
