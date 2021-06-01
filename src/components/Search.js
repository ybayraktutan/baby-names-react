import React from "react";


const Search = ({searchInput, setSearchInput}) => {
  
  function handleSearch(event) {
    setSearchInput(event.target.value);
  }  

  return (
    <div>
      <form>
        <input
          type="text"
          id="babyName"
          className="search-input"
          placeholder="Search for a name"
          value={searchInput}
          onChange={handleSearch}
        />          
      </form>
    </div>  
  );
};

export default Search;


