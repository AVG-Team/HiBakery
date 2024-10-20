import {useState} from 'react';
import PropTypes from "prop-types";

Shipping.propTypes = {
    nextStep: PropTypes.func.isRequired,
    formData: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        phoneNumber: PropTypes.string,
        flatHouseNo: PropTypes.string,
        address: PropTypes.string,
        city: PropTypes.string,
        district: PropTypes.string,
        ward: PropTypes.string,
        note: PropTypes.string,
    }).isRequired,
    updateFormData: PropTypes.func.isRequired,
};

export default function Shipping ({ nextStep, formData, updateFormData }) {
    const [privacyPolicy, setPrivacyPolicy] =  useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData({ [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!privacyPolicy) return alert('Please accept the privacy policy to continue');

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.address || !formData.city || !formData.district || !formData.ward) {
            return alert('Please fill in all fields');
        }
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="font-semibold mb-4">Contact Details</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" name="firstName" value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="p-2 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="p-2 border rounded"
                />
            </div>

            <h3 className="font-semibold mb-4">Shipping Details</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                    type="text"
                    name="flatHouseNo"
                    value={formData.flatHouseNo}
                    onChange={handleChange}
                    placeholder="Flat/House no."
                    className="p-2 border rounded col-span-2"
                />
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="ward"
                    value={formData.ward}
                    onChange={handleChange}
                    placeholder="Ward"
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="District"
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    placeholder="Note"
                    className="p-2 border rounded col-span-2"
                />
            </div>

            <div className="flex items-center mb-4">
                <input type="checkbox" id="same-address" className="mr-2" onChange={() => setPrivacyPolicy(true)}/>
                <label htmlFor="same-address" className="text-sm">
                    Accept our purchase and delivery policy
                </label>
            </div>

            <button type="submit" className="w-full p-3 bg-[#f05a7e] text-white rounded">
                Continue
            </button>
        </form>
    );
};