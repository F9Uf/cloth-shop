import React from 'react'

const TheMenus = ({ menus }) => {
  return (
    <ul className="flex space-x-6">
      {menus && menus
        .map(menu => (
          <li key={menu.id}>
            <a href={menu.link}>{menu.title}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default TheMenus