import React from 'react'
import SearchBoxStyles from './search-box.module.css'

const SearchBox = props => (
    <input
        className={SearchBoxStyles['search-box']} //css modules can’t write hyphen directly. It needs to be used this way if required. It would be better to use camelcase if posible.
        type='search' 
        placeholder='Search monsters' 
        onChange={props.onSearchChange}
    />
)

export default SearchBox