import React from "react";
import BabyNames from "./BabyNames";

const Favourites = ({babyNames, favouritesNames, setFavouritesNames}) =>{
    const favouriteBabyNames = babyNames.filter(babyName => favouritesNames.includes(babyName.id));

    const removeFromFavourites = (id) => {
        setFavouritesNames(favouritesNames.filter(item => item !== id))
    }

    const hasName= favouriteBabyNames.length > 0;
    
    return (
        <div>
            <h2>{hasName ? "Favourites:" : "Favourites: Click on some names below to add to your favourite list...."}</h2>
            {hasName && (
                <>
                <BabyNames babyNames={favouriteBabyNames} onItemClick={removeFromFavourites} />
                <hr/>
                </>
            )}            
        </div>        
    )
}

export default Favourites;