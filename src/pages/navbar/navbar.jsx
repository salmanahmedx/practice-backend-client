import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className="navbar">
            <div className="flex-1">
                <button className="text-xl">Practice.</button>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    {
                        user ? <button className='mx-4' onClick={() => signOut(auth)}>Sign Out</button> : <li><Link to="/login">Login</Link></li>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Navbar;