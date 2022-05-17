import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <div className="navbar">
            <div className="flex-1">
                <button className="text-xl">Practice.</button>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default navbar;