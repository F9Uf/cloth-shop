import React from 'react'

const TheNavbar = ({ sortByOptions }) => {
  return (
    <div className="py-3 sm:px-28 px-3 border-b-2 sm:space-x-5 space-y-2 sm:space-y-0 sm:sticky sm:top-16 bg-white">
      <label htmlFor="sortBy">Sort By:</label>
      <select name="sortBy" id="sortBy" className="font-semibold cursor-pointer focus:outline-none sm:w-48 w-full rounded-sm border-2 py-1 px-2">
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
