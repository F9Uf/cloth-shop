import React, { useState } from 'react'
import TheMenus from './TheMenus'

function TheHeader() {
  const [menus, _] = useState([
    { id: 0, title: 'Collection', link: '/', pos: 'left' },
    { id: 1, title: 'About me', link: '/', pos: 'left' },
    { id: 2, title: 'Q/A', link: '/', pos: 'right' },
    { id: 3, title: 'Contact me', link: '/', pos: 'right' },
  ])
  return (
    <header className="p-5 top-0 fixed w-full z-50 text-white">
      <div className="menu flex flex-row justify-center items-center space-x-10">
        <div className="left-menu text-sm">
          <TheMenus menus={menus.filter(e => e.pos === 'left')}/>
        </div>
        <h1 className="title font-bold text-xl text-center text-white">CLOTH SHOP</h1>
        <div className="right-menu text-sm">
          <TheMenus menus={menus.filter(e => e.pos === 'right')}/>
        </div>
      </div>
    </header>
  )
}

export default TheHeader