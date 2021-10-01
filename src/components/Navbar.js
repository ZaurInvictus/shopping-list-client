import React from "react";
import { Link } from 'react-router-dom'

const HeaderNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <Link className="navbar-brand" to='/'>Logo</Link>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars ml-1"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/about'>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/login'>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default HeaderNav;