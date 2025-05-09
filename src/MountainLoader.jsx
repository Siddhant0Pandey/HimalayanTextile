import React from 'react';
// import './mountainloader.css';

function MountainLoader() {
  return (
    <div className="loader-container">
      <svg
        viewBox="0 0 200 100"
        className="mountain-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="mountain-path path1"
          d="M0,80 Q50,20 100,80 Q150,20 200,80"
          fill="none"
          stroke="#1fa951"
          strokeWidth="2"
        />
        <path
          className="mountain-path path2"
          d="M0,80 Q50,30 100,80 Q150,30 200,80"
          fill="none"
          stroke="#1fa951"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export default MountainLoader;
