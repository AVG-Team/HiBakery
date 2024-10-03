import React, { useState } from 'react';

const Delivery = ({ nextStep, prevStep }) => {
  const [selectedOption, setSelectedOption] = useState('standard');

  return (
    <div className='flex flex-col flex-wrap w-full max-w-3xl'>
      <h3 className="font-semibold mb-4 text-lg">Delivery Options</h3>
      <div className="mb-6">
        <label className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              value="standard"
              checked={selectedOption === 'standard'}
              onChange={() => setSelectedOption('standard')}
              className="form-radio text-[#f05a7e] h-4 w-4"
            />
            <span className="text-base">Standard 5-7 Business Days</span>
          </div>
          <span className="text-[#0B8494] font-semibold">FREE</span> {/* Màu xanh cho "FREE" */}
        </label>

        <label className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              value="express"
              checked={selectedOption === 'express'}
              onChange={() => setSelectedOption('express')}
              className="form-radio text-[#f05a7e] h-4 w-4"
            />
            <span className="text-base">2-4 Business Days</span>
          </div>
          <span className="font-semibold">+5.000 VND</span> {/* Khoảng cách với giá tiền */}
        </label>

        <label className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              value="same-day"
              checked={selectedOption === 'same-day'}
              onChange={() => setSelectedOption('same-day')}
              className="form-radio text-[#f05a7e] h-4 w-4"
            />
            <span className="text-base">Same day delivery</span>
          </div>
          <span className="font-semibold">+15.000 VND</span> {/* Khoảng cách với giá tiền */}
        </label>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="px-6 py-2 border border-[#f05a7e] text-[#f05a7e] rounded-md hover:bg-[#f05a7e] hover:text-white transition duration-300"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="px-6 py-2 bg-[#f05a7e] text-white rounded-md hover:bg-[#d0496c] transition duration-300"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Delivery;
