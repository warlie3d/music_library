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
    const fetchData = async () => {
      const url = 'https://itunes.apple.com/search?term=linkin%20park'
      const response = await fetch(url)
      const data = await response.json()

      if (data.results) {
        setData(data.results)
      } else {
        //if you have no results, it resets 
        setData([])
        setMessage('Not Found')
      }
      

      console.log(data)

    }

    fetchData()
    //checking stateful variable
  }, [search])

  return (
    <div>
      <SearchBar />
      {message}
      <Gallery />
    </div>
  );
}

export default App;
