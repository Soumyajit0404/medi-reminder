// src/components/Navbar.js
import React from 'react';
import Logo from './logo';

const Navbar = ({ user, onSignOut }) => (
  <nav className="navbar">
    <Logo />
    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#features">Features</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
    <div className="nav-auth">
      {user ? (
        <button onClick={onSignOut} className="sign-out-btn">Sign Out</button>
      ) : (
        <span className="auth-text">Sign In to Access Your Reminders</span>
      )}
    </div>
  </nav>
);

export default Navbar;