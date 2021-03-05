import React, { useEffect, useState } from 'react'
import useProduct from '../hooks/product'

import TheBanner from '../components/TheBanner'
import TheNavbar from '../components/TheNavbar'
import TheContent from '../components/TheContent'

import productsJson from '../assets/data.json'

const HomePage = () => {
  const [products, setProducts] = useProduct(productsJson);
  const [sortBy, setSortBy] = useState('0')

  const [sortByOptions, _] = useState([
    { id: 0, value: '0', text: 'Name A-Z' },
    { id: 1, value: '1', text: 'Name Z-A' },
    { id: 2, value: '2', text: 'Price Low to High' },
    { id: 3, value: '3', text: 'Price High to Low' },
  ])

  function handlerSortByChange(value) {
    setSortBy(value)
    let tempProduct = [...products]
    if (value === '0') {
      tempProduct = tempProduct.sort((a, b) => a.name.localeCompare(b.name))
    } else if (value === '1') {
      tempProduct = tempProduct.sort((a, b) => b.name.localeCompare(a.name))
    } else if (value === '2') {
      tempProduct = tempProduct.sort((a, b) => a.price - b.price)
    } else if (value === '3') {
      tempProduct = tempProduct.sort((a, b) => b.price - a.price)
    }
    setProducts(tempProduct)
  }

  useEffect(() => {
    handlerSortByChange(sortBy)
  }, [sortBy])

  return (
    <>
      <TheBanner />
      <TheNavbar
        sortByOptions={sortByOptions}
        sortByChange={handlerSortByChange}
        sortBy={sortBy}
      />
      <TheContent products={products} />
    </>
  )
}

export default HomePage
