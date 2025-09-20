import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnState, setBtnState] = useState("Login");

    return (
        <div className='header'>
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnState === "Login" ? setBtnState("Logout") : setBtnState("Login");
                    }}>{btnState}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;