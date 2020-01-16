import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      {/* 
        by default 'NavLink' gives active links a className="active" 
        but we can overide that and give our own className for active links
        <li><NavLink exact to="/" activeClassName="imActive">Home</NavLink></li>
        <li><NavLink exact to="/" activeStyle={{ background: 'red' }}>Home</NavLink></li>
      */}
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
    </ul>
  </header>
);


export default Header;