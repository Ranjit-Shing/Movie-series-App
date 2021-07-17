import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <React.Fragment>

            <nav className="navbar">
                <div className="max-width">
                    <div className="logo"><NavLink to="/">Mo<span>vie app.</span></NavLink></div>
                    <ul className="menu">
                        <li><NavLink to="/" className="menu-btn">Home</NavLink></li>
                        <li><NavLink to="/series" className="menu-btn">Series</NavLink></li>
                        <li><NavLink to="/movies" className="menu-btn">Movies</NavLink></li>

                    </ul>

                </div>

            </nav>
            <br />
        </React.Fragment>
    )
}

export default Header;