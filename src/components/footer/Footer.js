
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <React.Fragment>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><NavLink to="#">about us</NavLink></li>
                                <li><NavLink to="#">our services</NavLink></li>
                                <li><NavLink to="#">privacy policy</NavLink></li>
                                <li><NavLink to="#">affiliate program</NavLink></li>
                            </ul>
                        </div>

                        <div className="social-container">
                            <h4>Follow Me</h4>
                            <NavLink to="/"
                                className="youtube social">
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </NavLink>
                            <NavLink to="/"
                                className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </NavLink>
                            <NavLink to="/" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </NavLink>
                            <NavLink to="/"
                                className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </NavLink>
                        </div>
                    </div>
                </div>

            </footer>
            <p className=" footer w-100 bg-light text-center text-capitalize text-dark align-content-center">
                ©2021 Made By Ranjit Kumar Shing. All Rights Reserved | Terms and Conditions
            </p>

        </React.Fragment>
    )
}

export default Footer;