import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Search from "./Search"

function App() {
const [listings, setListings] = useState([])
const [search, setSearch] = useState("")

useEffect(() => {
  getListings()
}, [])

  const getListings= () => {
    fetch("http://localhost:6001/listings")
    .then((resp) => resp.json())
    .then((listings) => {
      console.log(listings)
      setListings(listings)
    })
  }

  function handleDeleteListing(id) {
    const updatedListingData = listings.filter((listing) => listing.id !== id)
    setListings(updatedListingData)
  }
  
const displayedListings = listings.filter((listing) => 
listing.description.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header />
      <Search onSearch={setSearch} />
      <ListingsContainer
       listings={displayedListings}
       onDeleteListing={handleDeleteListing}
       />
    </div>
  );
}

export default App;
