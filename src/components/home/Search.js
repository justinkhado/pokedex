import React from 'react'

const Search = (props) => {
  const handleSearchChange = (event) => {
    props.setSearch(event.target.value)
  }
  return (
    <div>
      <div>
        Search
        <input
          value={props.search}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        Filter
      </div>
    </div>
  )
}

export default Search