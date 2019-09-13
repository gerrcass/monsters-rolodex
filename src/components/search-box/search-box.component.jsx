import React from 'react'

const SearchBox = ({onSearchChange}) => {
    return <input type='text' placeholder='Filters by your monster' onChange={onSearchChange}></input>
}

export default SearchBox