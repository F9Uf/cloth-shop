import React from 'react'

const CardItem = () => {
  return (
    <div className="w-full flex-row group hover:shadow-2xl rounded-sm transition duration-300 cursor-pointer">
      <div className="w-full overflow-hidden">
        <img 
          className="transform scale-100 group-hover:scale-125 group-hover:opacity-80 transition duration-300"
          src="https://img.ltwebstatic.com/images3_pi/2021/01/19/1611031856bbaecb9b67430df7870ef738bef0bc45_thumbnail_900x.webp"
          alt="photo"
        />
      </div>
      <div className="card-content p-2 flex flex-col">
        <h1 className="font-medium text-sm text-gray-700">SHEIN Men Collared Floral Embroidery Colorbloc</h1>
        <h2 className="pt-3 font-medium text-sm text-gray-500">฿5,000,000</h2>
      </div>
    </div>
  )
}

export default CardItem
