import React, { useState } from 'react';
import Shipping from './Shipping';
import Delivery from './Delivery';
import Payment from './Payment';
import Logo from '../../../assets/img/logo/HiBakery-logo.png';
import CheckIcon from '../../../assets/img/Icon/check.svg';
import CheckedIcon from '../../../assets/img/Icon/activated_check.svg';
import TrashCan from '../../../assets/img/Icon/trash-can.svg'; // Import trash can icon

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Example cart items
  const orderItems = [
    { id: 1, name: 'Pure set', price: 65000, quantity: 1, imageUrl: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Glow Cream', price: 95000, quantity: 2, imageUrl: 'https://via.placeholder.com/50' },
    // Other items...
  ];

  const subtotal = orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const salesTax = subtotal * 0.065;
  const total = subtotal + salesTax;

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-100">
      {/* Order Summary Section */}
      <div className="flex flex-col flex-wrap content-center w-full md:w-1/2 px-20 py-5 bg-white">
        <div className="flex items-center mb-4">
          <img src={Logo} alt="Logo" className="h-16" />
        </div>
        <div className="flex items-center mb-4">
          <button className="mr-2">&#8592;</button> {/* Back button */}
          <h2 className="text-xl font-semibold mb-4 mt-4">Order Summary</h2>
        </div>

        <div className="h-64 overflow-y-auto pr-2 w-full sm:w-[28rem] lg:w-[37.5rem]">
          {/* Display order items */}
          {orderItems.map(item => (
            <div key={item.id} className="flex items-start justify-between mb-6">
              <div className="flex items-center">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 mr-4" />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex flex-col items-center "> {/* Move the price and trash can up */}
                {/* Price displayed in VND format */}
                <p className="mb-1 text-base">{(item.price * item.quantity).toLocaleString()} VND</p> {/* Adjusted font size and margin */}
                {/* Trash can icon placed under the price */}
                <button className="p-2 hover:bg-gray-200 rounded "> {/* Reduced margin-top */}
                  <img src={TrashCan} alt="Delete" className="h-6 w-6" /> {/* Trash can icon */}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary details */}
        <div className='grid grid-rows-4 w-full md:w-2/4 mx-auto'>
          <div className="mt-4">
            <label className="block mb-2">Gift Card / Discount code</label>
            <div className="flex">
              <input type="text" className="p-2 border flex-1 rounded-l" placeholder="Enter code" />
              <button className="px-6 py-2 border rounded border-[#f05a7e] text-[#f05a7e] hover:bg-[#f05a7e]-500 transition">Apply</button>
            </div>
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between mb-2">
              <p>Subtotal</p>
              <p>{subtotal.toLocaleString()} VND</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Sales tax (6.5%)</p>
              <p>{salesTax.toLocaleString()} VND</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Shipping Fee</p>
              <p className="text-[#0B8494]">FREE</p>
            </div>
            <div className="flex justify-between font-semibold text-red-500">
              <p>Total due</p>
              <p>{total.toLocaleString()} VND</p>
            </div>
          </div>
        </div>
      </div>

      {/* Step Form Section */}
      <div className="w-full md:flex-1 p-20 md:p-30 bg-white mt-5 md:mt-0">
        <div className="flex items-center justify-center space-x-2 text-gray-500 mb-8">
          <h2 className={`text-sm md:text-base ${step >= 1 ? 'text-[#f05a7e] font-semibold' : ''}`}>Shipping</h2>
          <span className={`${step >= 2 ? 'text-[#f05a7e]' : ''}`}>—</span>
          <img className='h-4' src={step >= 2 ? CheckedIcon : CheckIcon} alt="check" />
          <span className={`${step >= 2 ? 'text-[#f05a7e]' : ''}`}>—</span>
          <h2 className={`text-sm md:text-base ${step >= 2 ? 'text-[#f05a7e] font-semibold' : ''}`}>Delivery</h2>
          <span className={`${step >= 3 ? 'text-[#f05a7e]' : ''}`}>—</span>
          <img className='h-4' src={step >= 3 ? CheckedIcon : CheckIcon} alt="checked" />
          <span className={`${step >= 3 ? 'text-[#f05a7e]' : ''}`}>—</span>
          <h2 className={`text-sm md:text-base ${step >= 3 ? 'text-[#f05a7e] font-semibold' : ''}`}>Payment</h2>
        </div>

        {step === 1 && <Shipping nextStep={nextStep} />}
        {step === 2 && <Delivery nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Payment prevStep={prevStep} />}
      </div>
    </div>
  );
};

export default MultiStepForm;
