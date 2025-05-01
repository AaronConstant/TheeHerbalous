import React from 'react';
import '../Styles/NavStyling.scss';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li className='nav-item'><a href="/">Home</a></li>
                <li className='nav-item'><a href="/about">About</a></li>
                <li className='nav-item'><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;