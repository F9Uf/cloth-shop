import React from 'react'
import CardItem from '../CardItem'

const TheContent = ({ products }) => {
  return (
    <div className="content grid grid-flow-row lg:grid-cols-4 grid-cols-2 gap-5 sm:px-28 px-3 py-10">
      {
        products &&
        products.length > 0 &&
        products
        .map(product => (
          <CardItem product={product} key={product.id} />
        ))
      }
    </div>
  )
}

export default TheContent
