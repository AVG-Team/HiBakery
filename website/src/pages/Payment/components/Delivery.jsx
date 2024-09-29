// Step2.js
import React, { useState } from 'react';

const Step2 = ({ nextStep, prevStep }) => {
  const [selectedOption, setSelectedOption] = useState('standard');

  return (
    <div>
      <h3 className="font-semibold mb-4">Delivery Options</h3>
      <div className="mb-4">
        <label className="flex items-center space-x-3 mb-2">
          <input
            type="radio"
            value="standard"
            checked={selectedOption === 'standard'}
            onChange={() => setSelectedOption('standard')}
          />
          <span>Standard 5-7 Business Days (MIỄN PHÍ)</span>
        </label>
        <label className="flex items-center space-x-3 mb-2">
          <input
            type="radio"
            value="express"
            checked={selectedOption === 'express'}
            onChange={() => setSelectedOption('express')}
          />
          <span>2-4 Business Days (+5.000 VND)</span>
        </label>
        <label className="flex items-center space-x-3 mb-2">
          <input
            type="radio"
            value="same-day"
            checked={selectedOption === 'same-day'}
            onChange={() => setSelectedOption('same-day')}
          />
          <span>Same day delivery (+15.000 VND)</span>
        </label>
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="p-3 bg-gray-300 rounded">Back</button>
        <button onClick={nextStep} className="p-3 bg-pink-500 text-white rounded">Continue</button>
      </div>
    </div>
  );
};

export default Step2;
