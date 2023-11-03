import React from 'react';
import './Body.css'; // Create a CSS file for styling

function Body() {
  return (
    <div className="body">
      <div className="intro-banner">
        <h1>Welcome to LN-SWAP</h1>
        <p>Your gateway to swapping cryptocurrencies</p>
      </div>
      <div className="swap-button">
        <button className="button swap">Swap</button>
      </div>
    </div>
  );
}

export default Body;
