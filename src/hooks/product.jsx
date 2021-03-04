import { useState } from 'react'

function useProduct(productsJson) {
  return useState(productsJson)

}

export default useProduct;