import React, { useState } from 'react'
import TheBanner from './components/TheBanner'
import TheHeader from './components/TheHeader'
import TheNavbar from './components/TheNavbar'
import TheContent from './components/TheContent'
import TheFooter from './components/TheFooter'

function App() {
  const [sortByOptions, _] = useState([
    { id: 0, value: 0, text: 'value 0' },
    { id: 1, value: 1, text: 'value 1' },
    { id: 2, value: 2, text: 'value 2' },
    { id: 3, value: 3, text: 'value 3' },
  ])

  return (
    <>
      <TheHeader />
      <TheBanner />
      <TheNavbar sortByOptions={sortByOptions} />
      <TheContent />
      <TheFooter />
    </>
  )
}

export default App
