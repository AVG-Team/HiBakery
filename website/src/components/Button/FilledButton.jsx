// src/components/Buttons/FilledButton.jsx
import React from 'react';

const FilledButton = ({ children, onClick, className = '', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 text-white font-semibold rounded-md shadow-sm bg-[#F05A7E] hover:bg-[#FFBE98] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed
        transition duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default FilledButton;
