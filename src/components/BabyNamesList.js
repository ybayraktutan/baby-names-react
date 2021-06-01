import React from "react";
import BabyNames from "./BabyNames";


const BabyNamesList = ({babyNames, searchInput, favouritesNames, setFavouritesNames}) => {  
   const filteredBabyNames = babyNames
        .sort((babyName1, babyName2) => (babyName1.name.localeCompare(babyName2.name)))
        .filter(babyName =>babyName.name.toUpperCase().includes(searchInput.toUpperCase()))
        .filter(babyName => !favouritesNames.includes(babyName.id));
    
  const addToFavourites = (id) => {
    setFavouritesNames([...favouritesNames, id])
  }

  return (
    <div>
      <BabyNames babyNames={filteredBabyNames} onItemClick={addToFavourites} />
    </div>    
  );
}

export default BabyNamesList;

