import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-link">home</Link> 
      <Link to="/about" className="nav-link">about me</Link> 
      <Link to="/portfolio" className="nav-link">portfolio</Link> 
    </nav>
  );
};

export default Navigation;
