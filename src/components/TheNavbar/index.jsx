import React from 'react'

const TheNavbar = ({ sortByOptions }) => {
  return (
    <div className="py-3 px-28 border-b-2 space-x-5">
      <label htmlFor="sortBy">Sort By:</label>
      <select name="sortBy" id="sortBy" className="font-semibold cursor-pointer focus:outline-none w-48">
        {
          sortByOptions && sortByOptions
          .map(option => (
            <option key={option.id} value={option.value}>{option.text}</option>
          ))
        }
      </select>
    </div>
  )
}

export default TheNavbar
