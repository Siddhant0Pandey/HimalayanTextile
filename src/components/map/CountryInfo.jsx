import React from 'react';

const CountryInfo = ({ countryName }) => {
  return (
    countryName && (
      <div className="absolute top-10 left-10 p-4 bg-white rounded shadow-lg">
        <h3 className="text-xl font-semibold">{countryName}</h3>
      </div>
    )
  );
};

export default CountryInfo;
