// src/components/Buttons/OutlinedButton.jsx
import React from 'react';

const OutlinedButton = ({ children, onClick, type = 'button', className = '', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 border-2 border-[#F05A7E] text-[#F05A7E] font-semibold rounded-md transition duration-300 ease-in-out hover:border-[#FFBE98] hover:text-[#FFBE98] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 disabled:border-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
