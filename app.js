import React from "react";
import { createRoot } from "react-dom/client";
import logo from "/src/assets/logo.jpg";


/**
 * Header
 * -Logo
 * -Nav item
 * Body
 * -search component
 * -Restaurant Container
 *      -Restaurant Card
 *          -Image
 *          -Name of Res, Star Rating, Cuisine, etc
 *          -Cusines
 *          -Rating
 * -
 * Footer
 * -Links
 * -Address
 * -Contact
 */


const Header = () => {
    return (
        <div className='header'>
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0",
        }}>
            <img 
                src="https://figarooliveoil.com/wp-content/uploads/2022/02/chicken-dum-biryani-2.png"
                className="res-logo"
                alt="res-logo"
            />
            <h3>Meghana Foods</h3>
            <h4>Biryani, North Indian, Mughlai</h4>
            <h4>4.5 ⭐</h4>
            <h4>38 mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    )
}
 
const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);