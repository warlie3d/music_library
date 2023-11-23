import { useState } from 'react'

function SearchBar({ handleSearch }) {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        //on submit from the search
        <form onSubmit={(e) => handleSearch(e, searchTerm)}>
            <input onChange={(e) => setSearchTerm(e.target.value)} placeholder='enter your search term here' />
            <input type='submit' />
        </form>
    )
}

export default SearchBar