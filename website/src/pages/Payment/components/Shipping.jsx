// Step1.js
import React from 'react';

const Shipping = ({ nextStep }) => {
  return (
    <div>
      <h3 className="font-semibold mb-4">Contact Details</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="First Name" className="p-2 border rounded" />
        <input type="text" placeholder="Last Name" className="p-2 border rounded" />
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <input type="text" placeholder="Phone Number" className="p-2 border rounded" />
      </div>

      <h3 className="font-semibold mb-4">Shipping Details</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="Flat/House no." className="p-2 border rounded" />
        <input type="text" placeholder="Address" className="p-2 border rounded col-span-2" />
        <input type="text" placeholder="City" className="p-2 border rounded" />
        <input type="text" placeholder="District" className="p-2 border rounded" />
        <input type="text" placeholder="Ward" className="p-2 border rounded" />
        <input type="text" placeholder="Note" className="p-2 border rounded col-span-2" />
      </div>

      <div className="flex items-center mb-4">
        <input type="checkbox" id="same-address" className="mr-2" />
        <label htmlFor="same-address" className="text-sm">
          My shipping and billing address are the same
        </label>
      </div>

      <button onClick={nextStep} className="w-full p-3 bg-pink-500 text-white rounded">Continue</button>
    </div>
  );
};

export default Shipping;
