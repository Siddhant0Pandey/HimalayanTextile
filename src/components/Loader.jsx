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
          className="mountain-path path1"
          d="M0,80 Q25,10 50,80 Q75,10 100,80 Q125,10 150,80 Q175,10 200,80"
          fill="none"
          stroke="#1fa951"
          strokeWidth="2"
        />
        <path
          className="mountain-path path2"
          d="M0,80 Q25,20 50,80 Q75,20 100,80 Q125,20 150,80 Q175,20 200,80"
          fill="none"
          stroke="#1fa951"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export default Loader;
