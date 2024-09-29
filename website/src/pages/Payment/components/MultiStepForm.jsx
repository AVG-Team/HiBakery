// MultiStepForm.js
import React, { useState } from 'react';
import Shipping from './Shipping';
import Delivery from './Delivery';
import Payment from './Payment';
import './MultiStepForm.css';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    // Ví dụ dữ liệu sản phẩm trong giỏ hàng
    const orderItems = [
        { id: 1, name: 'Pure set', price: 65000, quantity: 1, imageUrl: 'https://via.placeholder.com/50' },
        { id: 2, name: 'Glow Cream', price: 95000, quantity: 2, imageUrl: 'https://via.placeholder.com/50' },
        { id: 3, name: 'Glow Cream', price: 95000, quantity: 2, imageUrl: 'https://via.placeholder.com/50' },
        { id: 4, name: 'Glow Cream', price: 95000, quantity: 2, imageUrl: 'https://via.placeholder.com/50' },
        { id: 5, name: 'Glow Cream', price: 95000, quantity: 2, imageUrl: 'https://via.placeholder.com/50' },
        { id: 6, name: 'Glow Cream', price: 95000, quantity: 2, imageUrl: 'https://via.placeholder.com/50' },
        { id: 7, name: 'Pure set', price: 65000, quantity: 1, imageUrl: 'https://via.placeholder.com/50' },
        { id: 8, name: 'Glow Cream', price: 95000, quantity: 2, imageUrl: 'https://via.placeholder.com/50' },
        { id: 9, name: 'Glow Cream', price: 95000, quantity: 2, imageUrl: 'https://via.placeholder.com/50' },
        { id: 10, name: 'Glow Cream', price: 95000, quantity: 2, imageUrl: 'https://via.placeholder.com/50' },
        { id: 11, name: 'Glow Cream', price: 95000, quantity: 2, imageUrl: 'https://via.placeholder.com/50' },
        { id: 12, name: 'Glow Cream', price: 95000, quantity: 2, imageUrl: 'https://via.placeholder.com/50' },
    ];

    const subtotal = orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const salesTax = subtotal * 0.065;
    const total = subtotal + salesTax;

    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-100">
            {/* Order Summary Section */}
            <div className="w-full md:w-1/2 p-5 bg-white scroll-smooth">
                <div className="flex items-center mb-4">
                    <button className="mr-2">&#8592;</button> {/* nút quay lại */}
                    <h2 className="text-xl font-semibold mb-4 mt-4">Order Summary</h2>
                </div>

                <div className="h-64 overflow-y-auto pr-2"> {/* Đặt chiều cao cố định và bật cuộn */}
                    {orderItems.map(item => (
                        <div key={item.id} className="flex items-center mb-4">
                            <img src={item.imageUrl} alt={item.name} className="w-12 h-12 mr-4" />
                            <div className="flex-1">
                                <h4 className="font-semibold">{item.name}</h4>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <p>{(item.price * item.quantity).toLocaleString()} VND</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4">
                    <label className="block mb-2">Gift Card / Discount code</label>
                    <div className="flex">
                        <input type="text" className="p-2 border flex-1 rounded-l" placeholder="Enter code" />
                        <button className="px-4 bg-pink-500 text-white rounded-l">Apply</button>
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
                        <p className="text-green-500">FREE</p>
                    </div>
                    <div className="flex justify-between font-semibold text-red-500">
                        <p>Total due</p>
                        <p>{total.toLocaleString()} VND</p>
                    </div>
                </div>
            </div>

            {/* Step Form Section */}
            <div className="w-full md:flex-1 p-5 md:p-10 bg-white mt-5 md:mt-0">
                <div className="flex items-center justify-center space-x-2 text-gray-500 mb-8">
                    <h2 className={`text-sm md:text-base ${step === 1 ? 'text-pink-500 font-semibold' : ''}`}>Shipping</h2>
                    <span>—</span>
                    <h2 className={`text-sm md:text-base ${step === 2 ? 'text-pink-500 font-semibold' : ''}`}>Delivery</h2>
                    <span>—</span>
                    <h2 className={`text-sm md:text-base ${step === 3 ? 'text-pink-500 font-semibold' : ''}`}>Payment</h2>
                </div>

                {step === 1 && <Shipping nextStep={nextStep} />}
                {step === 2 && <Delivery nextStep={nextStep} prevStep={prevStep} />}
                {step === 3 && <Payment prevStep={prevStep} />}
            </div>
        </div>
    );
};

export default MultiStepForm;
