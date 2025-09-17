import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className='body'>
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                        const topRatedRestaurants = listOfRestaurants.filter((restaurant) => {
                            return +restaurant.info.avgRatingString >= 4.5;
                        });

                        setListOfRestaurants(topRatedRestaurants);
                    }}                
                >Top Rated Restaurant</button>
                <button 
                    className="filter-btn"
                    onClick={() => setListOfRestaurants(resList)}                
                >Show All Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => {
                    return(
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    )
                })}
            </div>
        </div>
    )
}

export default Body;