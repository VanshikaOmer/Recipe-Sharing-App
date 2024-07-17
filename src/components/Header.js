// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Recipe Sharing App</h1>
    </header>
  );
};

export default Header;
// Header.js
import React from 'react';
import logo from './path/to/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <img src=  alt="App Logo" className="logo" />
            {/* Navigation links can go here */}
        </header>
    );
};

export default Header;
