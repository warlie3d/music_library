import { useState, useEffect } from "react";
// SearchBar
import SearchBar from "./Components/SearchBar";
// Gallery
import Gallery from "./Components/Gallery/Gallery";

function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music')
  const [data, setData] = useState ([])
  return (
    <div>
      <SearchBar />
      {message}
      <Gallery />
    </div>
  );
}

export default App;
