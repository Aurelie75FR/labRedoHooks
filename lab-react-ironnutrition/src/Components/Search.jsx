import React from 'react'

const Search = (props) => {
    return (
        <input
        type="text"
        className="input search-bar"
        name="search"
        placeholder="Search"
        value={props.value}
        onChange={(event) => props.handleChange(event.target.value)}
      />
    )
}

export default Search
