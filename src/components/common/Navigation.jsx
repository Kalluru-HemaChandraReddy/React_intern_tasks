import React from 'react';
import './Navigation.css';

const Navigation = ({ setCurrentPage }) => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <button onClick={() => setCurrentPage('home')}>Home</button>
                </li>
                <li>
                    <button onClick={() => setCurrentPage('dashboard')}>Dashboard</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
