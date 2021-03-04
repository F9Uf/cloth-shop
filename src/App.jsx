import React, { useState } from 'react'
import TheBanner from './components/TheBanner'
import TheHeader from './components/TheHeader'
import TheNavbar from './components/TheNavbar'
import TheContent from './components/TheContent'
import TheFooter from './components/TheFooter'

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

  return (
    <>
      <TheHeader menus={menus} />
      <TheBanner />
      <TheNavbar sortByOptions={sortByOptions} />
      <TheContent />
      <TheFooter menus={menus}/>
    </>
  )
}

export default App
