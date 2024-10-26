import PropTypes from "prop-types";

Delivery.propTypes = {
    prevStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    formData: PropTypes.shape({
        deliveryTime: PropTypes.string,
    }).isRequired,
    updateFormData: PropTypes.func.isRequired,
};

export default function Delivery ({ nextStep, prevStep, formData, updateFormData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData({ [name]: value });
    };

    const onNext = () => {
        if (!formData.deliveryTime) return alert('Please select a delivery time');
        nextStep();
    }

    return (
        <div className='flex flex-col flex-wrap w-full max-w-3xl'>
            <h3 className="font-semibold mb-4 text-lg">Delivery Time</h3>
            <div className="mb-6">
                <input
                    type="datetime-local"
                    name="deliveryTime"
                    value={formData.deliveryTime || ''}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="flex justify-between mt-6">
                <button
                    onClick={prevStep}
                    className="px-6 py-2 border border-[#f05a7e] text-[#f05a7e] rounded-md hover:bg-[#f05a7e] hover:text-white transition duration-300"
                >
                    Back
                </button>
                <button
                    onClick={onNext}
                    className="px-6 py-2 bg-[#f05a7e] text-white rounded-md hover:bg-[#d0496c] transition duration-300"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};