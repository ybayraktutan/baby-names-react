import React from "react";


const Search = ({searchInput, handleSearch}) => {
  

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


