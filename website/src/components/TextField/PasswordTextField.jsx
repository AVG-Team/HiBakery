// PasswordTextField.jsx
import React, { useState } from 'react';

const PasswordTextField = ({
  label = 'Password',
  placeholder = 'Enter your password...',
  value = '',
  onChange,
  disabled = false,
}) => {
  const [isTouched, setIsTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const hasError = isTouched && value.trim() === '';

  return (
    <div className="w-full mb-4 relative">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
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
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      {hasError && (
        <p className="mt-1 text-sm text-red-500 animate-pulse">
          This field is required
        </p>
      )}
    </div>
  );
};

export default PasswordTextField;
