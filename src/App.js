import './App.css';
import React, { useState } from "react";
import Header from "./Header";
import babyNamesData from './babyNamesData.json'
import ListBabyNames from "./ListBabyNames"
import Search from "./Search";

const App = () => {
  

  const sortedBabyNames = babyNamesData.sort((babyName1, babyName2) => (
           babyName1.name.localeCompare(babyName2.name)
         ));

  const [searchInput, setSearchInput] = useState("");

  function handleSearch(event) {
    setSearchInput(event.target.value);
  }

  const filteredBabyNames = sortedBabyNames.filter(
    babyName => babyName.name.toUpperCase().includes(searchInput.toUpperCase())) 
    

  return (
    <div className="App">
      <Header />
      <Search searchInput={searchInput} handleSearch={handleSearch} />
      <ListBabyNames filteredBabyNames={filteredBabyNames}/>
    </div>
  );
}

export default App;

