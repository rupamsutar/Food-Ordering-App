import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const fetchRestaurantData = async () => {
        setListOfRestaurants([]);
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.636211&lng=73.7663474&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        const filteredData = jsonData?.data?.cards.filter((card) => {
            return card.card.card.id === "restaurant_grid_listing_v2";
        });

        const restaurantsData = filteredData[0].card.card.gridElements.infoWithStyle.restaurants;
        setListOfRestaurants(restaurantsData);

        console.log(restaurantsData);
    }

    useEffect(() => {
        fetchRestaurantData();
    }, []);

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
                    onClick={() => fetchRestaurantData()}
                >Show All Restaurants</button>
            </div>
            {listOfRestaurants.length === 0 ? <Shimmer /> : 
                <div className="res-container">
                    {listOfRestaurants.map((restaurant) => {
                        return (
                            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                        )
                    })}
                </div>}

        </div>
    )
}

export default Body;