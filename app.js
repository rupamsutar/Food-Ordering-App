import React from "react";
import { createRoot } from "react-dom/client";
import logo from "/src/assets/logo.jpg";


/**
 * Header
 * -Logo
 * -Nav item
 * Body
 * -search component
 * -Restaurant 
 * -
 * Footer
 * -Links
 * -Address
 * -Contact
 */

console.log(logo);

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

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
        </div>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);