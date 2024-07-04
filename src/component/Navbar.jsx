import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { UseAuth } from '../Auther';
const Navbar = () => {
    const { isLoggedIn } = UseAuth();
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><Link to="/home">Home</Link></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"><Link to="/contact">Contact</Link></li>
                {
                    !isLoggedIn ?
                        <>
                            <li className="nav-item"><Link to="/login">Login</Link></li>
                            <li className="nav-item"><Link to="/register">Register</Link></li>
                        </>
                        :

                        <li className="nav-item"><Link to="/logout">Logout</Link></li>
                }
            </ul>
        </nav>
    );
};

export default Navbar;
