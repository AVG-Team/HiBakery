// Step3.js
import React, { useState } from 'react';
const Payment = ({ prevStep }) => {
  const [selectedMethod, setSelectedMethod] = useState('pay_on_delivery');

  const paymentMethods = [
    { id: 'pay_on_delivery', label: 'Pay on Delivery', description: 'Pay with cash on delivery', icons: [] },
    { id: 'credit_debit_card', label: 'Credit/Debit Cards', description: 'Pay with your Credit / Debit Card', icons: ['visa', 'mastercard'] },
    { id: 'bank_transfer', label: 'Direct Bank Transfer', description: 'Make payment directly through bank account.', icons: [] },
    { id: 'other_methods', label: 'Other Payment Methods', description: 'Make payment through Momo, Zalo Pay, VNPAY', icons: ['momo', 'zalopay', 'vnpay'] },
  ];

  return (
    <div className="block justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded w-full max-w-2xl">
        <h3 className="text-pink-500 text-xl font-semibold mb-4">Payment Methods</h3>
        
        {/* Payment Methods List */}
        <div className="space-y-4">
          {paymentMethods.map(method => (
            <label key={method.id} className="flex items-start p-3 border rounded-md cursor-pointer hover:border-pink-300 transition">
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                checked={selectedMethod === method.id}
                onChange={() => setSelectedMethod(method.id)}
                className="mt-1"
              />
              <div className="ml-3">
                <span className="font-semibold">{method.label}</span>
                <p className="text-sm text-gray-500">{method.description}</p>
                {/* Display icons if available */}
                {method.icons.length > 0 && (
                  <div className="flex mt-2 space-x-2">
                    {method.icons.includes('visa') && <img src="https://th.bing.com/th/id/OIP.DCgfEJDZZDka6j0wAAPFrAHaEK?rs=1&pid=ImgDetMain" alt="Visa" className="h-6" />}
                    {method.icons.includes('mastercard') && <img src="https://logos-world.net/wp-content/uploads/2020/09/MasterCard-Logo-1979-1990.png" alt="Mastercard" className="h-6" />}
                    {method.icons.includes('momo') && <img src="https://developers.momo.vn/v3/vi/assets/images/icon-52bd5808cecdb1970e1aeec3c31a3ee1.png" alt="Momo" className="h-6" />}
                    {method.icons.includes('zalopay') && <img src="https://brandlogos.net/wp-content/uploads/2022/05/zalopay-logo_brandlogos.net_fjcup.png" alt="Zalo Pay" className="h-6" />}
                    {method.icons.includes('vnpay') && <img src="https://inkythuatso.com/uploads/images/2021/12/vnpay-logo-inkythuatso-01-13-16-26-42.jpg" alt="VNPAY" className="h-6" />}
                  </div>
                )}
              </div>
            </label>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button onClick={prevStep} className="px-6 py-2 border rounded border-[#f05a7e] text-[#f05a7e] hover:bg-[#f05a7e]-100 transition">
            Back
          </button>
          <button className="px-6 py-2 bg-[#f05a7e]-500 text-white rounded hover:bg-[#f05a7e]-600 transition">
            Pay $164.23
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
