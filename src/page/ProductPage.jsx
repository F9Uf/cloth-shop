import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import useProduct from '../hooks/product'

import TheGallery from '../components/TheGallery'

import productsJson from '../assets/data.json'

const ProductPage = () => {
  const [products, setProducts] = useProduct(productsJson);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    const idNumber = parseInt(id)
    if (idNumber < 0) {
      return setProduct(null)
    }
    const pIndex = products.findIndex(e => e.id === idNumber)
    if (pIndex < 0) {
      return setProduct(null)
    }
    return setProduct(products[pIndex])
  }, [id])

  return (
    <>
      <div className="bg-black w-full sm:h-20 h-32 -mt-3"></div>
      {
        product ? (
          <div className="flex justify-between sm:px-28 px-3 my-5 sm:space-x-3 sm:flex-row flex-col">
            <div className="sm:w-1/2 w-full">
              <TheGallery pictures={product.pictures} />
            </div>
            <div className="sm:w-1/2 w-full">asdlkfhl</div>
          </div>
        ) :
        (
          <div className="sm:px-28 px-3 my-20 text-center text-4xl">NOT FOUND</div>
        )
      }
      
    </>
  )
}

export default ProductPage
