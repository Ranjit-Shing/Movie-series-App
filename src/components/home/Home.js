import React from 'react';
import { NavLink } from 'react-router-dom';
import img from './himages/pic1.png'
const Home = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="main_icon">
                    <NavLink to="/movies"> <img className="main_img" src={img} alt="Ranjit" /></NavLink>
                    <h2>Movies</h2>
                </div>
                <div className="main_icon">
                    <NavLink to="/series"><img className="main_img" src={img} alt="Ranjit" /></NavLink>
                    <h2> Series</h2>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Home;