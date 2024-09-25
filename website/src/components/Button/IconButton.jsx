// src/components/Buttons/LoginButton.jsx
import React from 'react';

const IconButton = ({ onClick, className = '', disabled = false, logo, label = 'Login', bgColor = '#1877F2', hoverColor = '#145dbf', textColor = 'white' }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center px-4 py-2 font-semibold rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300 ease-in-out ${className}`}
      style={{
        backgroundColor: disabled ? '#gray-400' : bgColor,
        color: textColor,
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}
      onMouseEnter={(e) => {
        if (!disabled) e.target.style.backgroundColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.target.style.backgroundColor = bgColor;
      }}
    >
      {/* Custom Logo */}
      <div className="w-5 h-5 mr-2">{logo}</div>
      {/* Button Text */}
      <span>{label}</span>
    </button>
  );
};

export default IconButton;
