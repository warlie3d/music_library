import { useState, useEffect } from "react";
//import browseRouter
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// SearchBar
import SearchBar from "./Components/SearchBar";
// Gallery
import Gallery from "./Components/Gallery/Gallery";
import AlbumView from "./Components/Views/AlbumView";
import ArtistView from "./Components/Views/ArtistView";

function App() {
  //stateful variables
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music')
  const [data, setData] = useState([])
  //https://itunes.apple.com/search?term=black%20sabbath


  //fetching data
useEffect(() => {
  if (search) {
      

      const fetchData = async () => {
        const url = encodeURI(`https://itunes.apple.com/search?term=${search}`)
        const response = await fetch(url)
        const data = await response.json()
        //console.log(data)
        
        //check data for results
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
  //check only if it changes // refetching data
}, [search])
  
  //function for submit form
  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)

  }

  return (
    <div className="App">
      {message}
      <Router>
        <Routes>
          <Route path="/" element={
            <>
            <SearchBar handleSearch={handleSearch} />
            <Gallery data={data} />
            </>
          } />
            <Route path='/album/:id' element={<AlbumView />} />
            <Route path='/artist/:id' element={<ArtistView />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
