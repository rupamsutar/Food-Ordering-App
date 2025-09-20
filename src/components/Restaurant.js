import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RESTAURANT_INFO } from '../utils/constants';
import Shimmer from '../components/Shimmer';

export const Restaurant = () => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    const {id} = useParams();

    const fetchData = async() => {
        const restaurantInfo = RESTAURANT_INFO.replace("{{restaurant_id}}", id);
        const data = await fetch(restaurantInfo);
        const jsonData = await data.json();
        setRestaurantInfo(jsonData);
    }
    const { name, locality, labels } = restaurantInfo?.data?.cards[2]?.card?.card?.info || {};
    const dishes = restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    console.log(dishes);

    useEffect(() => {
        fetchData();
    }, [])

    if ( !restaurantInfo ) {
        return <Shimmer />
    }
    return (
        <div>
            <h1>{name}, {locality}</h1>
            <div>
            </div>
            <h2>Address : { labels && labels[1].message}</h2>
            <ul>
                {dishes?.map((dish) => {
                    const { id, name, price } = dish?.card?.info || {};
                    return <li key={id}>{name}, RS {+price/100}</li>
                })}
            </ul>
        </div>
    )
}

export default Restaurant;