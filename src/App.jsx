import React, { useState } from 'react'

import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

import { Route, Switch, useParams } from 'react-router-dom';

import HomePage from './page/HomePage'

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

  return (
    <>
      <TheHeader menus={menus} />
      <Switch>
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <TheFooter menus={menus}/>
    </>
  )
}

export default App
