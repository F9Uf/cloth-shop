import React, { useState } from 'react'

import useProduct from './hooks/product';

import TheBanner from './components/TheBanner'
import TheHeader from './components/TheHeader'
import TheNavbar from './components/TheNavbar'
import TheContent from './components/TheContent'
import TheFooter from './components/TheFooter'

import productsJson from './assets/data.json'
import { Route, Switch, useParams } from 'react-router-dom';

const Home = () => <h1>Home</h1>
const ProductPage = () => {
  const { id } = useParams();
  return (
    <h1>id: {id}</h1>
  )
}

function App() {
  const [menus, setMenus] = useState([
    { id: 0, title: 'Collection', link: '/', pos: 'left' },
    { id: 1, title: 'About me', link: '/', pos: 'left' },
    { id: 2, title: 'Q/A', link: '/', pos: 'right' },
    { id: 3, title: 'Contact me', link: '/', pos: 'right' },
  ])

  const [sortByOptions, _] = useState([
    { id: 0, value: 0, text: 'value 0' },
    { id: 1, value: 1, text: 'value 1' },
    { id: 2, value: 2, text: 'value 2' },
    { id: 3, value: 3, text: 'value 3' },
  ])

  const [products, setProducts] = useProduct(productsJson);

  return (
    <>
      <TheHeader menus={menus} />
      <TheBanner />
      <TheNavbar sortByOptions={sortByOptions} />
      {/* <TheContent products={products} /> */}
      <Switch>
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/" component={Home} />
      </Switch>
      <TheFooter menus={menus}/>
    </>
  )
}

export default App
