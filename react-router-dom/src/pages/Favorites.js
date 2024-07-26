import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../context/favoritesContext";

function FavoritesPage() {
    const { favorites, totalFavorites } = useContext(FavoritesContext);

    let content;

    if(totalFavorites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>
    } else {
        content = <MeetupList meetups={favorites} />
    }

    return (
        <section>
            <h1>Favorites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;