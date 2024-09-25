// PrimaryTextField.jsx
import React, { useState } from 'react';

const PrimaryTextField = ({
  label = '',
  placeholder = 'Enter text...',
  value = '',
  onChange,
  type = 'text',
  disabled = false,
}) => {
  const [isTouched, setIsTouched] = useState(false);
  const hasError = isTouched && value.trim() === '';

  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e);
          if (!isTouched) setIsTouched(true);
        }}
        onBlur={() => setIsTouched(true)}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-2 border rounded-md shadow-sm transition-all duration-300
          ${hasError ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'}
          focus:outline-none focus:ring-2 ${
            hasError ? 'focus:ring-red-500' : 'focus:ring-blue-500'
          } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
      />
      {hasError && (
        <p className="mt-1 text-sm text-red-500 animate-pulse">
          This field is required
        </p>
      )}
    </div>
  );
};

export default PrimaryTextField;
