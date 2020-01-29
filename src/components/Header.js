import React from 'react';

const Header = () => (
  <header className='header'>
    <span className='icn-logo'>
      <i className='material-icons'>code</i>
    </span>
    <ul className='main-nav'>
      {/* 
        by default 'NavLink' gives active links a className="active" 
        but we can overide that and give our own className for active links
        <li><NavLink exact to="/" activeClassName="imActive">Home</NavLink></li>
        <li><NavLink exact to="/" activeStyle={{ background: 'red' }}>Home</NavLink></li>
      */}
      <li>
        <a href='#home'>Home</a>
      </li>
      <li>
        <a href='#about'>About</a>
      </li>
      <li>
        <a href='#teachers'>Teachers</a>
      </li>
      <li>
        <a href='#courses'>Courses</a>
      </li>
    </ul>
  </header>
);

export default Header;
