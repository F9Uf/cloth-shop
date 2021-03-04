import React from 'react'

const CardItem = ({ product }) => {
  return (
    <div className="w-full flex-row group hover:shadow-2xl rounded-sm transition duration-300 cursor-pointer">
      <div className="w-full overflow-hidden">
        <img 
          className="transform scale-100 group-hover:scale-125 group-hover:opacity-80 transition duration-300"
          src={product.thumbnail}
          alt="photo"
        />
      </div>
      <div className="card-content p-2 flex flex-col">
        <h1 className="font-medium text-sm text-gray-700">{product.name}</h1>
        <h2 className="pt-3 font-medium text-sm text-gray-500">฿{product.price}</h2>
      </div>
    </div>
  )
}

export default CardItem
