import { useContext, useEffect, useState } from 'react';
import FavoritesContext from '../../context/favoritesContext';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
function MeetupItem(props) {
    const { removeFavoriteHandler, addFavoriteHandler, itemIsFavoriteHandler } = useContext(FavoritesContext);
    const [itemIsFavorite, setItemIsFavorite] = useState(false);
    
    useEffect(() => {
        setItemIsFavorite(itemIsFavoriteHandler(props.id));
    }, [itemIsFavoriteHandler, props.id]);

    function toggleFavoriteStatusHandler() {
        console.log(props);
        if(itemIsFavorite) {
            removeFavoriteHandler(props.id);
        } else {
            console.log(props);
            addFavoriteHandler({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;