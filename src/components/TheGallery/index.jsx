import React, { useState } from 'react'

const TheGallery = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  function changePictureTo(index) {
    setCurrentIndex(index)
  }

  function next() {
    if (currentIndex + 1 >= pictures.length) {
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex + 1)
  }

  function prev() {
    if (currentIndex - 1 < 0) {
      return setCurrentIndex(pictures.length - 1)
    }
    return setCurrentIndex(currentIndex - 1)
  }

  return (
    <div className="gallery flex flex-col w-full">
      <div className="previewImage relative group">
        <div
          className="cursor-pointer shadow-xl group-hover:opacity-100 opacity-0 transition-opacity left-3 absolute top-1/2 bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center text-xs font-bold"
          onClick={prev}
        >
          &#5176;
        </div>
        <img src={pictures[currentIndex]} alt="current-picture"/>
        <div
          className="cursor-pointer shadow-xl group-hover:opacity-100 opacity-0 transition-opacity right-3 absolute top-1/2 bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center text-xs font-bold"
          onClick={next}
        >
          &#5171;
        </div>
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
