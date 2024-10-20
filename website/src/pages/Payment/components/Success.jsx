import { useState } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

Success.propTypes = {
    prevStep: PropTypes.func.isRequired,
    formData: PropTypes.shape({
        paymentMethod: PropTypes.string,
    }).isRequired,
    updateFormData: PropTypes.func.isRequired,
};

export default function Success({ prevStep, formData, updateFormData }) {
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const [imagePayment, setImagePayment] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handlePrivacyPolicyChange = (e) => {
        setPrivacyPolicy(e.target.checked);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePayment(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!privacyPolicy) {
            return alert('Please accept the privacy policy to continue');
        }

        if (formData.paymentMethod !== '1' && !imagePayment) {
            return alert('Please upload an image of your payment');
        }

        setIsLoading(true);
        setError(null);

        try {
            const orderData = new FormData();
            orderData.append('orderData', JSON.stringify(formData));
            if (imagePayment) {
                orderData.append('imagePayment', imagePayment);
            }

            console.log('Order data:', orderData);

            const response = await axios.post('http://localhost:8080/api/orders', orderData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Order created successfully:', response.data);
            // navigate('/home');
        } catch (err) {
            console.error('Error creating order:', err);
            setError('An error occurred while processing your order. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
            <h3 className="font-semibold mb-4 text-lg">Payment Confirmation</h3>
            <div className="mb-4">
                <label className="block mb-2">Upload Payment Image</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full p-2 border rounded"
                />
                {imagePreview && (
                    <img
                        src={imagePreview}
                        alt="Payment"
                        className="mt-2 max-w-full h-auto"
                    />
                )}
            </div>

            <div className="mb-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={privacyPolicy}
                        onChange={handlePrivacyPolicyChange}
                        className="mr-2"
                    />
                    <span>I accept the privacy policy</span>
                </label>
            </div>

            <div className="relative mt-5">
                <p className="text-red-500 text-2xl absolute top-[-1rem] left-[-1rem]">*</p>
                <p className="text-sm text-gray-500 mb-2">
                    If You Pay Cash You Can Skip This Step
                </p>
            </div>

            {error && <div className="text-red-500 mb-4">{error}</div>}

            <div className="flex justify-between mt-6">
                <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 border border-[#f05a7e] text-[#f05a7e] rounded-md hover:bg-[#f05a7e] hover:text-white transition duration-300"
                    disabled={isLoading}
                >
                    Back
                </button>
                <button
                    type="submit"
                    className="px-6 py-2 bg-[#f05a7e] text-white rounded-md hover:bg-[#d0496c] transition duration-300"
                    disabled={isLoading}
                >
                    {isLoading ? 'Processing...' : 'Confirm Payment'}
                </button>
            </div>
        </form>
    );
}
