import React from "react";
// import ListingCard from "./ListingCard";
import ListingCard from "./ListingCard"


function ListingsContainer({ listings, onDeleteListing }) {

  const listingsObj = () => {
    return listings.map(listing => {
      return <ListingCard 
      id={listing.id}
      listing={listing}
      description={listing.description}
      image={listing.image}
      location={listing.location}
      onDeleteListing={onDeleteListing}
      />
    })
  }
  

  return (
    <main>
      <ul className="cards">
    {listingsObj()}
      </ul>
    </main>
  );
}

export default ListingsContainer;
