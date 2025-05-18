import React from 'react';

function Loader() {
  return (
    <div className="loader-container">
      <svg
        viewBox="0 0 200 100"
        className="mountain-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="mountain-path"
          d="M0,80 L10,40 L20,80 L30,30 L40,80 L50,35 L60,80 L70,30 L80,80 L90,25 L100,80 L110,35 L120,80 L130,30 L140,80 L150,40 L160,80 L170,30 L180,80 L190,35 L200,80"
          fill="none"
          stroke="#eaeeff"
          strokeWidth="2"
        />
      </svg>
    </div>    
  );
}

export default Loader;
