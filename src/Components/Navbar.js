import React from 'react';
import './Navbar.css'; // Create a CSS file for styling

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.png" alt="LN-SWAP" />
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="/">Protocol</a>
        </li>
        <li className="nav-item dropdown">
          <a href="/">Resources</a>
          <ul className="dropdown-menu">
            <li>
              <a href="/">Resource 1</a>
            </li>
            <li>
              <a href="/">Resource 2</a>
            </li>
            <li>
              <a href="/">Resource 3</a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a href="/">Learn</a>
          <ul className="dropdown-menu">
            <li>
              <a href="/">Course 1</a>
            </li>
            <li>
              <a href="/">Course 2</a>
            </li>
            <li>
              <a href="/">Course 3</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="buttons">
        <button className="button swap">Swap</button>
        <button className="button refund">Refund</button>
      </div>
    </div>
  );
}

export default Navbar;
