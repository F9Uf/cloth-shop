import React, { useEffect, useState } from 'react'
import TheMenus from './TheMenus'

function TheHeader() {
  const [menus, _] = useState([
    { id: 0, title: 'Collection', link: '/', pos: 'left' },
    { id: 1, title: 'About me', link: '/', pos: 'left' },
    { id: 2, title: 'Q/A', link: '/', pos: 'right' },
    { id: 3, title: 'Contact me', link: '/', pos: 'right' },
  ])

  const [headerClass, setHeaderClass] = useState('')

  const handlerScroll = () => {
    if (window.pageYOffset > 0) {
      setHeaderClass('bg-black')
    } else {
      setHeaderClass('bg-transparent')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll)

    return () => {
      window.removeEventListener('scroll', handlerScroll)
    }
  })


  return (
    <header className={"p-5 top-0 fixed w-full z-50 text-white transition duration-1000 ease-in-out " + headerClass}>
      <div className="menu flex flex-col sm:flex-row justify-center items-center sm:space-x-10">
        <div className="left-menu text-sm w-40 sm:flex justify-end text-center hidden">
          <TheMenus menus={menus.filter(e => e.pos === 'left')}/>
        </div>
        <h1 className="title font-bold text-xl text-center text-white w-40">CLOTH SHOP</h1>
        <div className="right-menu text-sm w-40 text-center hidden sm:flex">
          <TheMenus menus={menus.filter(e => e.pos === 'right')}/>
        </div>

        <div className="responsive-menu sm:hidden flex mt-3 text-center">
          <TheMenus menus={menus}/>
        </div>
      </div>
    </header>
  )
}

export default TheHeader