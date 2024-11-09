
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="text-white hover:text-gray-400">Home</Link>
                </li>
                <li>
                    <Link to="/experts" className="text-white hover:text-gray-400">Experts</Link>
                </li>
                <li>
                    <Link to="/addexpert" className="text-white hover:text-gray-400">Ajouter un expert</Link>
                </li>
                {/* <li>
                    <Link to="/addexpert" className="text-white hover:text-gray-400">add expert</Link>
                </li> */}
            </ul>
        </nav>
    );
};

export default Navbar;