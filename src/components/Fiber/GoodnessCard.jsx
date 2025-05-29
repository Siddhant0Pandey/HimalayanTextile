import React from "react";

const GoodnessCard = ({ item, theme }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center transition-transform duration-300 hover:scale-105">
      <div
        className="text-4xl mb-4 mx-auto flex items-center justify-center w-16 h-16 rounded-full"
        style={{ backgroundColor: theme.light, color: theme.primary }}
      >
        {item.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2" style={{ color: theme.darkText }}>
        {item.title}
      </h3>
      <p className="text-gray-600 text-sm">{item.description}</p>
    </div>
  );
};

export default GoodnessCard;
