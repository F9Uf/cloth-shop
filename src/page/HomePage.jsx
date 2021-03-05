import React, { useState } from 'react'
import useProduct from '../hooks/product'

import TheBanner from '../components/TheBanner'
import TheNavbar from '../components/TheNavbar'
import TheContent from '../components/TheContent'

import productsJson from '../assets/data.json'

const HomePage = () => {
  const [products, setProducts] = useProduct(productsJson);
  const [sortBy, setSortBy] = useState('3')

  const [sortByOptions, _] = useState([
    { id: 0, value: '0', text: 'value 0' },
    { id: 1, value: '1', text: 'value 1' },
    { id: 2, value: '2', text: 'value 2' },
    { id: 3, value: '3', text: 'value 3' },
  ])

  function handlerSortByChange(value) {
    setSortBy(value)
  }

  return (
    <>
      <TheBanner />
      <TheNavbar
        sortByOptions={sortByOptions}
        sortByChange={handlerSortByChange}
        sortBy={sortBy}
      />
      {sortBy}
      <TheContent products={products} />
    </>
  )
}

export default HomePage
