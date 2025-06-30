
import React from 'react';

const AboutButton = ({ label, onClick, isActive }) => {
  // Conditionally apply classes based on isActive
  const buttonClass = isActive 
    ? 'text-yellow-400' 
    : 'text-white hover:text-gray-400';

  return (
    <button
      className={`px-4 py-2 bg-gray-700 hover:text-gray-400 ${buttonClass} font-exo font-semibold`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default AboutButton;
