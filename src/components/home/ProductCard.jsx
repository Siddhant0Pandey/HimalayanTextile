import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ title, description, link }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-lg shadow-lg border-l-4 border-green-500 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default ProductCard;
