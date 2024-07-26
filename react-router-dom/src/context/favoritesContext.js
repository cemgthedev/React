import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavoriteHandler: (favoriteMeetup) => {},
    removeFavoriteHandler: (meetupId) => {},
    itemIsFavoriteHandler: (meetupId) => {},
})

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);
    
    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId); 
        });
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some((meetup) => meetup.id === meetupId);
    }

    return (
        <FavoritesContext.Provider value={{
            favorites: userFavorites,
            totalFavorites: userFavorites.length,
            addFavoriteHandler: addFavoriteHandler,
            removeFavoriteHandler: removeFavoriteHandler,
            itemIsFavoriteHandler: itemIsFavoriteHandler,
        }}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;