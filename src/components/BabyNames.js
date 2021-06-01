import React from "react";

const BabyNames = ({babyNames, onItemClick}) => {
    return (
        <ul>
          {babyNames.map(babyName => (
            <li className = {babyName.sex} key={babyName.id}>
              <button onClick={() => onItemClick(babyName.id)}>{babyName.name}</button>
              </li>            
            ))}
      </ul>  
    )

}

export default BabyNames;