import React from "react";


const ListBabyNames = (props) => {

  return (
    <div>
        {props.filteredBabyNames.map((babyName, index) => (
           babyName.sex === "f" ? 
           <span className = "female">{babyName.name} </span>
           :<span className = "male">{babyName.name} </span>
          ))}
      </div>    
  );
}

export default ListBabyNames;

