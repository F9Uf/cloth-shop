import React from 'react'
import { Link } from 'react-router-dom'
import CardItem from '../CardItem'

const TheContent = ({ products }) => {
  return (
    <div className="content grid grid-flow-row lg:grid-cols-4 grid-cols-2 gap-5 sm:px-28 px-3 py-10">
      {
        products &&
        products.length > 0 &&
        products
        .map(product => (
          <Link to={"/product/" + product.id} key={product.id}>
            <CardItem product={product}/>
          </Link>
        ))
      }
    </div>
  )
}

export default TheContent
