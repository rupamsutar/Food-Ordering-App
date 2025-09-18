import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchState, setSearchState] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);

    const fetchRestaurantData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.636211&lng=73.7663474&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        const filteredData = jsonData?.data?.cards.filter((card) => {
            return card.card.card.id === "restaurant_grid_listing_v2";
        });

        return filteredData[0].card.card.gridElements.infoWithStyle.restaurants;
    }

    const filterTheRestaurants = () => {
        const filteredRestaurants = allRestaurants.filter((restaurant) => {
            return restaurant.info.name.toLowerCase().includes(searchState.toLowerCase());
        });
        setListOfRestaurants(filteredRestaurants);
    }

    useEffect(() => {
        const fetchAndSetData = async () => {
            setListOfRestaurants([]);
            const restaurants = await fetchRestaurantData();
            setListOfRestaurants(restaurants);
            setAllRestaurants(restaurants);
        }
        fetchAndSetData();
    }, []);

    return (
        <div className='body'>
            <div className="filter">
                <div className="filter-restaurants">
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
                        onClick={() => setListOfRestaurants(allRestaurants)}
                    >Show All Restaurants</button>
                </div>
                <div className="search-restaurants">
                    <input 
                        className="search-input"
                        value={searchState}
                        onChange={(e) => {
                            setSearchState(e.target.value);
                        }}
                    ></input>
                    <button className="search-btn" onClick={filterTheRestaurants}>Search</button>
                </div>
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