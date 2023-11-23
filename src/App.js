import { useState, useEffect } from "react";
// SearchBar
import SearchBar from "./Components/SearchBar";
// Gallery
import Gallery from "./Components/Gallery/Gallery";

function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music')
  const [data, setData] = useState([])
  //https://itunes.apple.com/search?term=black%20sabbath

useEffect(() => {
    if (search) {
      const fetchData = async () => {
        const url = encodeURI(`https://itunes.apple.com/search?term=${search}`)
        const response = await fetch(url)
        const data = await response.json()
        //console.log(data)
  
        if (data.results.length > 0) {
          setData(data.results)
        } else {
          setData([])
          setMessage('Not Found')
        }
      }
  
      fetchData()
    } else {
      if(data) setData([])
    }
  //check only if it changes
}, [search])
  
  //function for submit form
  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)

  }

  return (
    <div>
      {message}
      <SearchBar handleSearch={handleSearch} />
      {/* pass data to gallery */}
      <Gallery data={data} />
    </div>
  );
}

export default App;
