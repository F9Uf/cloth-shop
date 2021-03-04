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
          <div className="flex justify-between sm:px-28 px-3 sm:my-16 my-8 sm:space-x-10 sm:space-y-0 space-y-4 sm:flex-row flex-col">
            <div className="sm:w-1/2 w-full">
              <TheGallery pictures={product.pictures} />
            </div>
            <div className="sm:w-1/2 w-full">
              <h1 className="sm:text-3xl text-xl">{product.name}</h1>
              <h2 className="sm:text-3xl text-xl my-4 font-bold">฿{product.price}</h2>
              <hr/>
              <h2 className="text-lg font-semibold text-gray-700 my-4">Size</h2>
              <div className="size-section flex flex-row space-x-3">
                {
                  product.available_size &&
                  product.available_size.map((size, index) => (
                    <div className="size bg-white rounded-full border-gray-400 border w-16 text-center cursor-pointer" key={index}>
                      {size}
                    </div>
                  ))
                }
              </div>
              <button
                className="my-10 text-white bg-black w-full rounded-sm py-5 outline-none focus:outline-none hover:opacity-90 transition-all ease-in-out">
                  ADD TO CART
                </button>
            </div>
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
