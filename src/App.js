import './App.css';
import React, { useState } from "react";
import Header from "./components/Header";
import babyNamesData from './data/babyNamesData.json'
import BabyNamesList from "./components/BabyNamesList"
import Search from "./components/Search";
import Favourites from "./components/Favourites"

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [favouritesNames, setFavouritesNames] = useState([]); 

  

 

  return (
    <div className="App">
      <Header />
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <Favourites babyNames={babyNamesData} favouritesNames={favouritesNames} setFavouritesNames={setFavouritesNames} />
      <BabyNamesList babyNames={babyNamesData} searchInput={searchInput} favouritesNames={favouritesNames} setFavouritesNames={setFavouritesNames}/>
    </div>
  );
}

export default App;

