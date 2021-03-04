import React from 'react'
import './index.css'

const TheMenus = ({ menus, direction='row' }) => {
  return (
    <ul className={`flex flex-${direction} ${direction === 'row' ? 'space-x-6' : 'space-y-3'}`}>
      {menus && menus
        .map(menu => (
          <li key={menu.id} className="menu">
            <a href={menu.link}>{menu.title}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default TheMenus